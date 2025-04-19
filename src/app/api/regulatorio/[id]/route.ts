import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const atualizacaoId = params.id;
    
    // Buscar atualização regulatória pelo ID
    const atualizacao = await prisma.atualizacaoRegulatoria.findUnique({
      where: { id: atualizacaoId }
    });
    
    if (!atualizacao) {
      return NextResponse.json(
        { error: 'Atualização regulatória não encontrada' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ atualizacao });
  } catch (error) {
    console.error('Erro ao buscar atualização regulatória:', error);
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
    // Verificar autenticação e permissão (apenas admin)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const atualizacaoId = params.id;
    
    // Buscar atualização regulatória pelo ID
    const atualizacao = await prisma.atualizacaoRegulatoria.findUnique({
      where: { id: atualizacaoId }
    });
    
    if (!atualizacao) {
      return NextResponse.json(
        { error: 'Atualização regulatória não encontrada' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    const { titulo, descricao, fonte, dataPublicacao, dataVigencia, status } = body;
    
    if (!titulo || !descricao || !fonte || !dataPublicacao) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Atualizar atualização regulatória
    const atualizacaoAtualizada = await prisma.atualizacaoRegulatoria.update({
      where: { id: atualizacaoId },
      data: {
        titulo,
        descricao,
        fonte,
        dataPublicacao: new Date(dataPublicacao),
        dataVigencia: dataVigencia ? new Date(dataVigencia) : null,
        status: status || atualizacao.status
      }
    });
    
    // Se o status mudou para 'vigente', notificar todos os usuários
    if (status === 'vigente' && atualizacao.status !== 'vigente') {
      const usuarios = await prisma.user.findMany();
      
      // Criar notificações para cada usuário
      for (const usuario of usuarios) {
        await prisma.notificacao.create({
          data: {
            titulo: 'Atualização Regulatória em Vigor',
            mensagem: `A atualização regulatória "${titulo}" entrou em vigor.`,
            tipo: 'atualizacao',
            userId: usuario.id
          }
        });
      }
    }
    
    return NextResponse.json({
      message: 'Atualização regulatória atualizada com sucesso',
      atualizacao: atualizacaoAtualizada
    });
  } catch (error) {
    console.error('Erro ao atualizar atualização regulatória:', error);
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
    
    const atualizacaoId = params.id;
    
    // Buscar atualização regulatória pelo ID
    const atualizacao = await prisma.atualizacaoRegulatoria.findUnique({
      where: { id: atualizacaoId }
    });
    
    if (!atualizacao) {
      return NextResponse.json(
        { error: 'Atualização regulatória não encontrada' },
        { status: 404 }
      );
    }
    
    // Remover atualização regulatória
    await prisma.atualizacaoRegulatoria.delete({
      where: { id: atualizacaoId }
    });
    
    return NextResponse.json({
      message: 'Atualização regulatória excluída com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir atualização regulatória:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
