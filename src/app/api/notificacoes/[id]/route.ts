import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const notificacaoId = params.id;
    
    // Buscar notificação pelo ID
    const notificacao = await prisma.notificacao.findUnique({
      where: { id: notificacaoId }
    });
    
    if (!notificacao) {
      return NextResponse.json(
        { error: 'Notificação não encontrada' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ notificacao });
  } catch (error) {
    console.error('Erro ao buscar notificação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const notificacaoId = params.id;
    
    // Buscar notificação pelo ID
    const notificacao = await prisma.notificacao.findUnique({
      where: { id: notificacaoId }
    });
    
    if (!notificacao) {
      return NextResponse.json(
        { error: 'Notificação não encontrada' },
        { status: 404 }
      );
    }
    
    // Marcar como lida
    const notificacaoAtualizada = await prisma.notificacao.update({
      where: { id: notificacaoId },
      data: {
        lida: true
      }
    });
    
    return NextResponse.json({
      message: 'Notificação marcada como lida',
      notificacao: notificacaoAtualizada
    });
  } catch (error) {
    console.error('Erro ao atualizar notificação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const notificacaoId = params.id;
    
    // Buscar notificação pelo ID
    const notificacao = await prisma.notificacao.findUnique({
      where: { id: notificacaoId }
    });
    
    if (!notificacao) {
      return NextResponse.json(
        { error: 'Notificação não encontrada' },
        { status: 404 }
      );
    }
    
    // Remover notificação
    await prisma.notificacao.delete({
      where: { id: notificacaoId }
    });
    
    return NextResponse.json({
      message: 'Notificação excluída com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir notificação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
