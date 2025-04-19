import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { codigo: string } }
) {
  try {
    const certificadoCodigo = params.codigo;
    
    // Buscar certificado pelo código
    const certificado = await prisma.certificado.findUnique({
      where: { codigo: certificadoCodigo },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      }
    });
    
    if (!certificado) {
      return NextResponse.json(
        { error: 'Certificado não encontrado', valido: false },
        { status: 404 }
      );
    }
    
    // Verificar se o certificado está válido
    const agora = new Date();
    const valido = certificado.dataValidade > agora;
    
    return NextResponse.json({ 
      certificado,
      valido
    });
  } catch (error) {
    console.error('Erro ao verificar certificado:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
