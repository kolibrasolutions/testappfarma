import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por categoria
    const { searchParams } = new URL(request.url);
    const categoriaId = searchParams.get('categoria');
    
    const whereClause = categoriaId ? { categoriaId } : {};
    
    // Buscar medicamentos do banco de dados
    const medicamentos = await prisma.medicamento.findMany({
      where: whereClause,
      include: {
        categoria: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });
    
    return NextResponse.json({ medicamentos });
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
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
    const { 
      nome, 
      principioAtivo, 
      formaFarmaceutica, 
      concentracao, 
      categoriaId,
      indicacoes,
      contraindicacoes,
      efeitosAdversos
    } = body;
    
    if (!nome || !principioAtivo || !formaFarmaceutica || !concentracao || !categoriaId) {
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
    
    // Criar novo medicamento
    const novoMedicamento = await prisma.medicamento.create({
      data: {
        nome,
        principioAtivo,
        formaFarmaceutica,
        concentracao,
        categoriaId,
        indicacoes,
        contraindicacoes,
        efeitosAdversos
      }
    });
    
    return NextResponse.json(
      { message: 'Medicamento criado com sucesso', medicamento: novoMedicamento },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar medicamento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
