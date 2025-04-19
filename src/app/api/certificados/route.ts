import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por usuário
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('usuario');
    
    const whereClause = userId ? { userId } : {};
    
    // Buscar certificados do banco de dados
    const certificados = await prisma.certificado.findMany({
      where: whereClause,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        dataEmissao: 'desc'
      }
    });
    
    return NextResponse.json({ certificados });
  } catch (error) {
    console.error('Erro ao buscar certificados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação e permissão (apenas admin ou sistema)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const body = await request.json();
    const { userId, titulo, moduloId } = body;
    
    if (!userId || !titulo) {
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
    
    // Verificar se o usuário já possui certificado com este título
    if (moduloId) {
      const certificadoExistente = await prisma.certificado.findFirst({
        where: {
          userId,
          titulo: {
            contains: titulo
          }
        }
      });
      
      if (certificadoExistente) {
        return NextResponse.json(
          { error: 'O usuário já possui um certificado para este módulo' },
          { status: 400 }
        );
      }
    }
    
    // Gerar código único
    const codigo = `CERT-${titulo.substring(0, 3).toUpperCase()}-${Date.now().toString().substring(9, 13)}`;
    
    // Definir datas
    const dataEmissao = new Date();
    const dataValidade = new Date();
    dataValidade.setFullYear(dataValidade.getFullYear() + 1); // Validade de 1 ano
    
    // Criar novo certificado
    const novoCertificado = await prisma.certificado.create({
      data: {
        userId,
        titulo,
        codigo,
        dataValidade
      }
    });
    
    return NextResponse.json(
      { 
        message: 'Certificado emitido com sucesso', 
        certificado: novoCertificado
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao emitir certificado:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
