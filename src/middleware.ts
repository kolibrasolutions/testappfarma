import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';

// Chave secreta para JWT (em produção, deve ser armazenada em variáveis de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'farmacia-app-secret-key';

// Middleware para verificar autenticação
export async function middleware(request: NextRequest) {
  // Rotas públicas que não precisam de autenticação
  const publicRoutes = [
    '/',
    '/auth/login',
    '/auth/register',
  ];

  // Verificar se a rota atual é pública
  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname === route || 
    request.nextUrl.pathname.startsWith('/api/auth') ||
    request.nextUrl.pathname.startsWith('/api/certificados/verificar')
  );

  // Se for uma rota pública, permitir acesso
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Verificar se o usuário está autenticado
  const authToken = cookies().get('auth-token')?.value;

  // Se não estiver autenticado, redirecionar para login
  if (!authToken) {
    // Para rotas da API, retornar erro 401
    if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }
    
    // Para rotas de página, redirecionar para login
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  try {
    // Verificar e decodificar o token
    const decodedToken = jwt.verify(authToken, JWT_SECRET) as {
      id: string;
      email: string;
      name: string;
      role: string;
      farmaciaId?: string;
    };

    // Verificar permissões específicas para rotas administrativas
    if (request.nextUrl.pathname.startsWith('/dashboard/admin') || 
        request.nextUrl.pathname.startsWith('/api/admin')) {
      
      if (decodedToken.role !== 'ADMIN') {
        // Para rotas da API, retornar erro 403
        if (request.nextUrl.pathname.startsWith('/api/')) {
          return NextResponse.json(
            { error: 'Acesso não autorizado' },
            { status: 403 }
          );
        }
        
        // Para rotas de página, redirecionar para dashboard do balconista
        return NextResponse.redirect(new URL('/dashboard/balconista', request.url));
      }
    }

    // Adicionar informações do usuário ao cabeçalho da requisição para uso nos endpoints
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decodedToken.id);
    requestHeaders.set('x-user-role', decodedToken.role);

    // Continuar com a requisição, incluindo os cabeçalhos adicionados
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // Token inválido ou expirado
    
    // Para rotas da API, retornar erro 401
    if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Sessão expirada ou inválida' },
        { status: 401 }
      );
    }
    
    // Para rotas de página, redirecionar para login
    const response = NextResponse.redirect(new URL('/auth/login', request.url));
    
    // Remover o cookie inválido
    response.cookies.set({
      name: 'auth-token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    });
    
    return response;
  }
}

// Configurar em quais caminhos o middleware deve ser executado
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
