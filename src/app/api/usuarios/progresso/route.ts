import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Obter ID do usuário da query
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('usuario');
    
    if (!userId) {
      return NextResponse.json(
        { error: 'ID do usuário é obrigatório' },
        { status: 400 }
      );
    }
    
    // Verificar se o usuário existe
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        farmaciaId: true
      }
    });
    
    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 404 }
      );
    }
    
    // Buscar progresso do usuário
    const progressoDoUsuario = await prisma.progresso.findMany({
      where: { userId },
      include: {
        modulo: {
          select: {
            id: true,
            titulo: true,
            categoriaId: true,
            categoria: {
              select: {
                id: true,
                nome: true
              }
            }
          }
        }
      }
    });
    
    // Calcular estatísticas
    const totalModulos = await prisma.modulo.count();
    const modulosConcluidos = progressoDoUsuario.filter(p => p.concluido).length;
    const modulosEmAndamento = progressoDoUsuario.filter(p => !p.concluido && p.progresso > 0).length;
    const percentualConcluido = totalModulos > 0 ? Math.round((modulosConcluidos / totalModulos) * 100) : 0;
    
    return NextResponse.json({
      usuario: user,
      estatisticas: {
        totalModulos,
        modulosConcluidos,
        modulosEmAndamento,
        percentualConcluido
      },
      progresso: progressoDoUsuario
    });
  } catch (error) {
    console.error('Erro ao buscar progresso do usuário:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
