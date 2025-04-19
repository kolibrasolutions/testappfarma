import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por usuário
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('usuario');
    const lidas = searchParams.get('lidas') === 'true';
    
    const whereClause: any = {};
    
    if (userId) {
      whereClause.userId = userId;
    }
    
    if (!lidas) {
      whereClause.lida = false;
    }
    
    // Buscar notificações do banco de dados
    const notificacoes = await prisma.notificacao.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json({ notificacoes });
  } catch (error) {
    console.error('Erro ao buscar notificações:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação e permissão (apenas admin ou sistema)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const body = await request.json();
    const { titulo, mensagem, tipo, userId } = body;
    
    if (!titulo || !mensagem || !tipo || !userId) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      );
    }
    
    // Criar nova notificação
    const novaNotificacao = await prisma.notificacao.create({
      data: {
        titulo,
        mensagem,
        tipo,
        userId
      }
    });
    
    return NextResponse.json(
      { message: 'Notificação criada com sucesso', notificacao: novaNotificacao },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar notificação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
