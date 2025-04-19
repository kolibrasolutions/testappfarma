import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

// Chave secreta para JWT (em produção, deve ser armazenada em variáveis de ambiente)
const JWT_SECRET = process.env.JWT_SECRET || 'farmacia-app-secret-key';

// Interface para dados do usuário
interface UserData {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: UserData = await request.json();
    const { email, password } = body;

    // Validar dados de entrada
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Buscar usuário pelo email
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        farmacia: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });

    // Verificar se o usuário existe
    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Verificar senha
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Gerar token JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        farmaciaId: user.farmaciaId
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Configurar cookie com o token
    const response = NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          farmaciaId: user.farmaciaId,
          farmacia: user.farmacia
        }
      },
      { status: 200 }
    );

    // Definir cookie seguro
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 dia
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Erro no login:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
