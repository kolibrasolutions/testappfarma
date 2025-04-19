import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por módulo
    const { searchParams } = new URL(request.url);
    const moduloId = searchParams.get('modulo');
    
    const whereClause = moduloId ? { moduloId } : {};
    
    // Buscar avaliações do banco de dados
    const avaliacoes = await prisma.avaliacao.findMany({
      where: whereClause,
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
          }
        }
      }
    });
    
    return NextResponse.json({ avaliacoes });
  } catch (error) {
    console.error('Erro ao buscar avaliações:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação e permissão (apenas admin ou farmacêutico)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
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
    
    // Criar nova avaliação com questões (transação)
    const novaAvaliacao = await prisma.$transaction(async (tx) => {
      // Criar avaliação
      const avaliacao = await tx.avaliacao.create({
        data: {
          titulo,
          moduloId
        }
      });
      
      // Criar questões
      for (const questao of questoes) {
        await tx.questao.create({
          data: {
            enunciado: questao.enunciado,
            opcoes: questao.opcoes,
            respostaCorreta: questao.respostaCorreta,
            avaliacaoId: avaliacao.id
          }
        });
      }
      
      // Retornar avaliação criada com questões
      return tx.avaliacao.findUnique({
        where: { id: avaliacao.id },
        include: {
          questoes: true
        }
      });
    });
    
    return NextResponse.json(
      { message: 'Avaliação criada com sucesso', avaliacao: novaAvaliacao },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar avaliação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
