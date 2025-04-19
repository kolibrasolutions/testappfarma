import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Buscar todas as categorias do banco de dados
    const categorias = await prisma.categoria.findMany({
      orderBy: {
        ordem: 'asc'
      }
    });

    return NextResponse.json({ categorias });
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
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
    const { nome, descricao } = body;
    
    if (!nome || !descricao) {
      return NextResponse.json(
        { error: 'Nome e descrição são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Contar categorias existentes para determinar a ordem
    const categoriasCount = await prisma.categoria.count();
    
    // Criar nova categoria
    const novaCategoria = await prisma.categoria.create({
      data: {
        nome,
        descricao,
        ordem: categoriasCount + 1
      }
    });
    
    return NextResponse.json(
      { message: 'Categoria criada com sucesso', categoria: novaCategoria },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
