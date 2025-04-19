import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const body = await request.json();
    const { userId, avaliacaoId, respostas } = body;
    
    if (!userId || !avaliacaoId || !respostas || !Array.isArray(respostas)) {
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
    
    // Verificar se a avaliação existe
    const avaliacao = await prisma.avaliacao.findUnique({
      where: { id: avaliacaoId },
      include: {
        questoes: true,
        modulo: true
      }
    });
    
    if (!avaliacao) {
      return NextResponse.json(
        { error: 'Avaliação não encontrada' },
        { status: 404 }
      );
    }
    
    // Verificar se o usuário já realizou esta avaliação
    const avaliacaoJaRealizada = await prisma.resultadoAvaliacao.findUnique({
      where: {
        userId_avaliacaoId: {
          userId,
          avaliacaoId
        }
      }
    });
    
    if (avaliacaoJaRealizada) {
      return NextResponse.json(
        { error: 'Você já realizou esta avaliação' },
        { status: 400 }
      );
    }
    
    // Verificar se o número de respostas corresponde ao número de questões
    if (respostas.length !== avaliacao.questoes.length) {
      return NextResponse.json(
        { error: 'O número de respostas não corresponde ao número de questões' },
        { status: 400 }
      );
    }
    
    // Calcular pontuação
    let acertos = 0;
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i] === avaliacao.questoes[i].respostaCorreta) {
        acertos++;
      }
    }
    
    const pontuacao = Math.round((acertos / respostas.length) * 100);
    const aprovado = pontuacao >= 70;
    
    // Criar resultado da avaliação
    const resultado = await prisma.resultadoAvaliacao.create({
      data: {
        userId,
        avaliacaoId,
        respostas,
        pontuacao,
        aprovado
      }
    });
    
    // Se aprovado, atualizar progresso do módulo e emitir certificado
    if (aprovado) {
      // Atualizar progresso do módulo
      await prisma.progresso.upsert({
        where: {
          userId_moduloId: {
            userId,
            moduloId: avaliacao.moduloId
          }
        },
        update: {
          progresso: 100,
          concluido: true,
          ultimoAcesso: new Date()
        },
        create: {
          userId,
          moduloId: avaliacao.moduloId,
          progresso: 100,
          concluido: true
        }
      });
      
      // Verificar se já existe certificado para este módulo
      const certificadoExistente = await prisma.certificado.findFirst({
        where: {
          userId,
          titulo: {
            contains: avaliacao.modulo.titulo
          }
        }
      });
      
      // Se não existir certificado, emitir um novo
      if (!certificadoExistente) {
        const titulo = `${avaliacao.modulo.titulo} - ${avaliacao.titulo}`;
        const codigo = `CERT-${avaliacao.modulo.titulo.substring(0, 3).toUpperCase()}-${Date.now().toString().substring(9, 13)}`;
        
        // Definir datas
        const dataEmissao = new Date();
        const dataValidade = new Date();
        dataValidade.setFullYear(dataValidade.getFullYear() + 1); // Validade de 1 ano
        
        await prisma.certificado.create({
          data: {
            userId,
            titulo,
            codigo,
            dataValidade
          }
        });
      }
    }
    
    return NextResponse.json({
      message: aprovado ? 'Parabéns! Você foi aprovado na avaliação.' : 'Você não atingiu a pontuação mínima para aprovação.',
      resultado: {
        ...resultado,
        aprovado
      }
    });
  } catch (error) {
    console.error('Erro ao submeter avaliação:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
