import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

// Chave secreta para JWT (em produção, deve ser armazenada em variáveis de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'farmacia-app-secret-key';

export async function GET(request: NextRequest) {
  try {
    // Obter o token de autenticação
    const authToken = cookies().get('auth-token')?.value;

    if (!authToken) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      );
    }

    // Verificar e decodificar o token
    try {
      const decodedToken = jwt.verify(authToken, JWT_SECRET) as {
        id: string;
        email: string;
        name: string;
        role: string;
        farmaciaId?: string;
      };

      // Buscar usuário atualizado no banco de dados
      const user = await prisma.user.findUnique({
        where: { id: decodedToken.id },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          farmaciaId: true,
          farmacia: {
            select: {
              id: true,
              nome: true
            }
          }
        }
      });

      if (!user) {
        throw new Error('Usuário não encontrado');
      }

      // Retornar os dados do usuário
      return NextResponse.json({ user });
    } catch (error) {
      // Token inválido ou expirado
      const response = NextResponse.json(
        { error: 'Sessão expirada ou inválida' },
        { status: 401 }
      );

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
  } catch (error) {
    console.error('Erro ao verificar sessão:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
