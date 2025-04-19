import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const avaliacaoId = params.id;
    
    // Buscar avaliação pelo ID
    const avaliacao = await prisma.avaliacao.findUnique({
      where: { id: avaliacaoId },
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
        },
        questoes: {
          select: {
            id: true,
            enunciado: true,
            opcoes: true
            // Não incluir respostaCorreta para enviar ao cliente
          }
        }
      }
    });
    
    if (!avaliacao) {
      return NextResponse.json(
        { error: 'Avaliação não encontrada' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ avaliacao });
  } catch (error) {
    console.error('Erro ao buscar avaliação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar autenticação e permissão (apenas admin ou farmacêutico)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const avaliacaoId = params.id;
    
    // Buscar avaliação pelo ID
    const avaliacao = await prisma.avaliacao.findUnique({
      where: { id: avaliacaoId },
      include: {
        questoes: true
      }
    });
    
    if (!avaliacao) {
      return NextResponse.json(
        { error: 'Avaliação não encontrada' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    const { titulo, moduloId, questoes } = body;
    
    if (!titulo || !moduloId || !questoes || !questoes.length) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Verificar se o módulo existe
    const modulo = await prisma.modulo.findUnique({
      where: { id: moduloId }
    });
    
    if (!modulo) {
      return NextResponse.json(
        { error: 'Módulo não encontrado' },
        { status: 404 }
      );
    }
    
    // Validar questões
    for (const questao of questoes) {
      if (!questao.enunciado || !questao.opcoes || questao.opcoes.length < 2 || questao.respostaCorreta === undefined) {
        return NextResponse.json(
          { error: 'Todas as questões devem ter enunciado, pelo menos duas opções e uma resposta correta' },
          { status: 400 }
        );
      }
    }
    
    // Atualizar avaliação e questões (transação)
    const avaliacaoAtualizada = await prisma.$transaction(async (tx) => {
      // Atualizar avaliação
      const avaliacaoUpdate = await tx.avaliacao.update({
        where: { id: avaliacaoId },
        data: {
          titulo,
          moduloId
        }
      });
      
      // Excluir questões existentes
      await tx.questao.deleteMany({
        where: { avaliacaoId }
      });
      
      // Criar novas questões
      for (const questao of questoes) {
        await tx.questao.create({
          data: {
            enunciado: questao.enunciado,
            opcoes: questao.opcoes,
            respostaCorreta: questao.respostaCorreta,
            avaliacaoId
          }
        });
      }
      
      // Retornar avaliação atualizada com questões
      return tx.avaliacao.findUnique({
        where: { id: avaliacaoId },
        include: {
          questoes: true
        }
      });
    });
    
    return NextResponse.json({
      message: 'Avaliação atualizada com sucesso',
      avaliacao: avaliacaoAtualizada
    });
  } catch (error) {
    console.error('Erro ao atualizar avaliação:', error);
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
    // Verificar autenticação e permissão (apenas admin)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const avaliacaoId = params.id;
    
    // Buscar avaliação pelo ID
    const avaliacao = await prisma.avaliacao.findUnique({
      where: { id: avaliacaoId }
    });
    
    if (!avaliacao) {
      return NextResponse.json(
        { error: 'Avaliação não encontrada' },
        { status: 404 }
      );
    }
    
    // Verificar se existem resultados associados
    const resultadosAssociados = await prisma.resultadoAvaliacao.count({
      where: { avaliacaoId }
    });
    
    if (resultadosAssociados > 0) {
      return NextResponse.json(
        { error: 'Não é possível excluir uma avaliação que possui resultados associados' },
        { status: 400 }
      );
    }
    
    // Remover avaliação e questões (transação)
    await prisma.$transaction(async (tx) => {
      // Excluir questões
      await tx.questao.deleteMany({
        where: { avaliacaoId }
      });
      
      // Excluir avaliação
      await tx.avaliacao.delete({
        where: { id: avaliacaoId }
      });
    });
    
    return NextResponse.json({
      message: 'Avaliação excluída com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir avaliação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
