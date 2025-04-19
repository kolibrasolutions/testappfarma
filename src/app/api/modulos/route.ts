import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por categoria
    const { searchParams } = new URL(request.url);
    const categoriaId = searchParams.get('categoria');
    
    const whereClause = categoriaId ? { categoriaId } : {};
    
    // Buscar módulos do banco de dados
    const modulos = await prisma.modulo.findMany({
      where: whereClause,
      orderBy: {
        ordem: 'asc'
      },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });
    
    return NextResponse.json({ modulos });
  } catch (error) {
    console.error('Erro ao buscar módulos:', error);
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
    
    // Determinar ordem se não fornecida
    let ordemEfetiva = ordem;
    if (!ordemEfetiva) {
      const modulosCount = await prisma.modulo.count({
        where: { categoriaId }
      });
      ordemEfetiva = modulosCount + 1;
    }
    
    // Criar novo módulo
    const novoModulo = await prisma.modulo.create({
      data: {
        titulo,
        descricao,
        conteudo,
        ordem: ordemEfetiva,
        categoriaId,
        versao: '1.0.0'
      }
    });
    
    return NextResponse.json(
      { message: 'Módulo criado com sucesso', modulo: novoModulo },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar módulo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
