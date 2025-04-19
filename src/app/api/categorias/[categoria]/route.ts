import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { categoria: string } }
) {
  try {
    const categoriaId = params.categoria;
    
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
    
    // Buscar módulos da categoria
    const modulos = await prisma.modulo.findMany({
      where: { categoriaId },
      orderBy: { ordem: 'asc' }
    });
    
    return NextResponse.json({
      categoria,
      modulos
    });
  } catch (error) {
    console.error('Erro ao buscar detalhes da categoria:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { categoria: string } }
) {
  try {
    // Verificar autenticação e permissão (apenas admin ou farmacêutico)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const categoriaId = params.categoria;
    
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
    
    const body = await request.json();
    const { nome, descricao } = body;
    
    if (!nome || !descricao) {
      return NextResponse.json(
        { error: 'Nome e descrição são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Atualizar categoria
    const categoriaAtualizada = await prisma.categoria.update({
      where: { id: categoriaId },
      data: {
        nome,
        descricao
      }
    });
    
    return NextResponse.json({
      message: 'Categoria atualizada com sucesso',
      categoria: categoriaAtualizada
    });
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { categoria: string } }
) {
  try {
    // Verificar autenticação e permissão (apenas admin)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const categoriaId = params.categoria;
    
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
    
    // Verificar se existem módulos associados
    const modulosAssociados = await prisma.modulo.count({
      where: { categoriaId }
    });
    
    if (modulosAssociados > 0) {
      return NextResponse.json(
        { error: 'Não é possível excluir uma categoria que possui módulos associados' },
        { status: 400 }
      );
    }
    
    // Remover categoria
    await prisma.categoria.delete({
      where: { id: categoriaId }
    });
    
    return NextResponse.json({
      message: 'Categoria excluída com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir categoria:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
