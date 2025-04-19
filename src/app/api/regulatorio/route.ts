import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // Opcionalmente, filtrar por status
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    const whereClause: any = {};
    
    if (status) {
      whereClause.status = status;
    }
    
    // Buscar atualizações regulatórias do banco de dados
    const atualizacoes = await prisma.atualizacaoRegulatoria.findMany({
      where: whereClause,
      orderBy: {
        dataPublicacao: 'desc'
      }
    });
    
    return NextResponse.json({ atualizacoes });
  } catch (error) {
    console.error('Erro ao buscar atualizações regulatórias:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação e permissão (apenas admin)
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const body = await request.json();
    const { titulo, descricao, fonte, dataPublicacao, dataVigencia, status } = body;
    
    if (!titulo || !descricao || !fonte || !dataPublicacao) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }
    
    // Criar nova atualização regulatória
    const novaAtualizacao = await prisma.atualizacaoRegulatoria.create({
      data: {
        titulo,
        descricao,
        fonte,
        dataPublicacao: new Date(dataPublicacao),
        dataVigencia: dataVigencia ? new Date(dataVigencia) : null,
        status: status || 'pendente'
      }
    });
    
    // Notificar administradores sobre a nova atualização
    const admins = await prisma.user.findMany({
      where: { role: 'ADMIN' }
    });
    
    // Criar notificações para cada administrador
    for (const admin of admins) {
      await prisma.notificacao.create({
        data: {
          titulo: 'Nova Atualização Regulatória',
          mensagem: `Uma nova atualização regulatória foi registrada: ${titulo}`,
          tipo: 'atualizacao',
          userId: admin.id
        }
      });
    }
    
    return NextResponse.json(
      { message: 'Atualização regulatória criada com sucesso', atualizacao: novaAtualizacao },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao criar atualização regulatória:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
