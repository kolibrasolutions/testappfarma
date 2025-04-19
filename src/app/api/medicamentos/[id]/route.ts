import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const medicamentoId = params.id;
    
    // Buscar medicamento pelo ID
    const medicamento = await prisma.medicamento.findUnique({
      where: { id: medicamentoId },
      include: {
        categoria: {
          select: {
            id: true,
            nome: true
          }
        }
      }
    });
    
    if (!medicamento) {
      return NextResponse.json(
        { error: 'Medicamento não encontrado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ medicamento });
  } catch (error) {
    console.error('Erro ao buscar medicamento:', error);
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
    
    const medicamentoId = params.id;
    
    // Buscar medicamento pelo ID
    const medicamento = await prisma.medicamento.findUnique({
      where: { id: medicamentoId }
    });
    
    if (!medicamento) {
      return NextResponse.json(
        { error: 'Medicamento não encontrado' },
        { status: 404 }
      );
    }
    
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
    
    // Atualizar medicamento
    const medicamentoAtualizado = await prisma.medicamento.update({
      where: { id: medicamentoId },
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
    
    return NextResponse.json({
      message: 'Medicamento atualizado com sucesso',
      medicamento: medicamentoAtualizado
    });
  } catch (error) {
    console.error('Erro ao atualizar medicamento:', error);
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
    
    const medicamentoId = params.id;
    
    // Buscar medicamento pelo ID
    const medicamento = await prisma.medicamento.findUnique({
      where: { id: medicamentoId }
    });
    
    if (!medicamento) {
      return NextResponse.json(
        { error: 'Medicamento não encontrado' },
        { status: 404 }
      );
    }
    
    // Remover medicamento
    await prisma.medicamento.delete({
      where: { id: medicamentoId }
    });
    
    return NextResponse.json({
      message: 'Medicamento excluído com sucesso'
    });
  } catch (error) {
    console.error('Erro ao excluir medicamento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
