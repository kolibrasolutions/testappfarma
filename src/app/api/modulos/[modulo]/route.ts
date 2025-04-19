import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { modulo: string } }
) {
  try {
    const moduloId = params.modulo;
    
    // Buscar módulo pelo ID
    const modulo = await prisma.modulo.findUnique({
      where: { id: moduloId },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });
    
    if (!modulo) {
      return NextResponse.json(
        { error: 'Módulo não encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ modulo });
  } catch (error) {
    console.error('Erro ao buscar módulo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { modulo: string } }
) {
  try {
    // Verificar autenticação e permissão (apenas admin ou farmacêutico)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const moduloId = params.modulo;
    
    // Buscar módulo pelo ID
    const modulo = await prisma.modulo.findUnique({
      where: { id: moduloId }
    });
    
    if (!modulo) {
      return NextResponse.json(
        { error: 'Módulo não encontrado' },
        { status: 404 }
      );
    }
    
    const body = await request.json();
    const { titulo, descricao, conteudo, ordem, categoriaId } = body;
    
    if (!titulo || !descricao || !conteudo || !categoriaId) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Verificar se a categoria existe
    const categoria = await prisma.categoria.findUnique({
      where: { id: categoriaId }
    });
    
    if (!categoria) {
      return NextResponse.json(
        { error: 'Categoria não encontrada' },
        { status: 404 }
      );
    }
    
    // Incrementar versão do módulo
    const versaoAtual = modulo.versao;
    const partes = versaoAtual.split('.');
    const novaVersao = `${partes[0]}.${partes[1]}.${parseInt(partes[2]) + 1}`;
    
    // Atualizar módulo
    const moduloAtualizado = await prisma.modulo.update({
      where: { id: moduloId },
      data: {
        titulo,
        descricao,
        conteudo,
        ordem: ordem || modulo.ordem,
        categoriaId,
        versao: novaVersao
      }
    });
    
    return NextResponse.json({
      message: 'Módulo atualizado com sucesso',
      modulo: moduloAtualizado
    });
  } catch (error) {
    console.error('Erro ao atualizar módulo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { modulo: string } }
) {
  try {
    // Verificar autenticação e permissão (apenas admin)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const moduloId = params.modulo;
    
    // Buscar módulo pelo ID
    const modulo = await prisma.modulo.findUnique({
      where: { id: moduloId }
    });
    
    if (!modulo) {
      return NextResponse.json(
        { error: 'Módulo não encontrado' },
        { status: 404 }
      );
    }
    
    // Verificar se existem avaliações associadas
    const avaliacoesAssociadas = await prisma.avaliacao.count({
      where: { moduloId }
    });
    
    if (avaliacoesAssociadas > 0) {
      return NextResponse.json(
        { error: 'Não é possível excluir um módulo que possui avaliações associadas' },
        { status: 400 }
      );
    }
    
    // Verificar se existem progressos associados
    const progressosAssociados = await prisma.progresso.count({
      where: { moduloId }
    });
    
    if (progressosAssociados > 0) {
      return NextResponse.json(
        { error: 'Não é possível excluir um módulo que possui progressos de usuários associados' },
        { status: 400 }
      );
    }
    
    // Remover módulo
    await prisma.modulo.delete({
      where: { id: moduloId }
    });
    
    return NextResponse.json({
      message: 'Módulo excluído com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir módulo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
