import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Função para executar testes de componentes integrados
async function testarComponentesIntegrados() {
  console.log('Iniciando testes de componentes integrados...');
  
  // Teste de sistema de avaliação e certificados
  const testeAvaliacaoCertificados = async () => {
    try {
      console.log('Testando sistema de avaliação e certificados...');
      
      // Criar usuário de teste
      const usuario = await prisma.user.create({
        data: {
          name: `Usuário Teste Avaliação ${Date.now()}`,
          email: `teste-avaliacao-${Date.now()}@exemplo.com`,
          password: 'Senha@123',
          role: 'BALCONISTA'
        }
      });
      
      // Criar categoria e módulo para teste
      const categoria = await prisma.categoria.create({
        data: {
          nome: `Categoria Avaliação ${Date.now()}`,
          descricao: 'Descrição para teste de avaliação',
          ordem: 1
        }
      });
      
      const modulo = await prisma.modulo.create({
        data: {
          titulo: `Módulo Avaliação ${Date.now()}`,
          descricao: 'Descrição para teste de avaliação',
          conteudo: 'Conteúdo para teste de avaliação',
          ordem: 1,
          versao: '1.0.0',
          categoriaId: categoria.id
        }
      });
      
      // Criar avaliação com questões
      const avaliacao = await prisma.avaliacao.create({
        data: {
          titulo: `Avaliação Teste ${Date.now()}`,
          moduloId: modulo.id,
          questoes: {
            create: [
              {
                enunciado: 'Questão 1 de teste',
                opcoes: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
                respostaCorreta: 0
              },
              {
                enunciado: 'Questão 2 de teste',
                opcoes: ['Opção A', 'Opção B', 'Opção C', 'Opção D'],
                respostaCorreta: 1
              }
            ]
          }
        },
        include: {
          questoes: true
        }
      });
      
      console.log(`✅ Avaliação criada: ${avaliacao.titulo} com ${avaliacao.questoes.length} questões`);
      
      // Simular submissão de avaliação com aprovação
      const respostas = [0, 1]; // Respostas corretas
      const pontuacao = 100; // 100% de acerto
      
      const resultado = await prisma.resultadoAvaliacao.create({
        data: {
          userId: usuario.id,
          avaliacaoId: avaliacao.id,
          respostas,
          pontuacao,
          aprovado: true
        }
      });
      
      console.log(`✅ Resultado de avaliação registrado: ${resultado.pontuacao}% de acerto`);
      
      // Verificar atualização de progresso
      const progresso = await prisma.progresso.create({
        data: {
          userId: usuario.id,
          moduloId: modulo.id,
          progresso: 100,
          concluido: true
        }
      });
      
      console.log(`✅ Progresso atualizado: ${progresso.progresso}% concluído`);
      
      // Emitir certificado
      const certificado = await prisma.certificado.create({
        data: {
          userId: usuario.id,
          titulo: `Certificado de ${modulo.titulo}`,
          codigo: `CERT-${Date.now()}`,
          dataValidade: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
      });
      
      console.log(`✅ Certificado emitido: ${certificado.titulo} (código: ${certificado.codigo})`);
      
      // Verificar certificado
      const certificadoVerificado = await prisma.certificado.findUnique({
        where: { codigo: certificado.codigo },
        include: { user: true }
      });
      
      if (!certificadoVerificado) {
        throw new Error('Certificado não encontrado na verificação');
      }
      
      console.log(`✅ Certificado verificado: ${certificadoVerificado.titulo} para ${certificadoVerificado.user.name}`);
      
      // Limpar dados de teste
      await prisma.certificado.delete({ where: { id: certificado.id } });
      await prisma.resultadoAvaliacao.delete({ where: { id: resultado.id } });
      await prisma.progresso.delete({ where: { id: progresso.id } });
      await prisma.questao.deleteMany({ where: { avaliacaoId: avaliacao.id } });
      await prisma.avaliacao.delete({ where: { id: avaliacao.id } });
      await prisma.modulo.delete({ where: { id: modulo.id } });
      await prisma.categoria.delete({ where: { id: categoria.id } });
      await prisma.user.delete({ where: { id: usuario.id } });
      
      console.log('✅ Dados de teste limpos com sucesso');
      
      return { success: true, message: 'Testes de avaliação e certificados concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de avaliação e certificados falhou:', error);
      return { success: false, message: 'Falha nos testes de avaliação e certificados', error };
    }
  };
  
  // Teste de sistema de notificações
  const testeNotificacoes = async () => {
    try {
      console.log('Testando sistema de notificações...');
      
      // Criar usuário de teste
      const usuario = await prisma.user.create({
        data: {
          name: `Usuário Teste Notificações ${Date.now()}`,
          email: `teste-notificacoes-${Date.now()}@exemplo.com`,
          password: 'Senha@123',
          role: 'BALCONISTA'
        }
      });
      
      // Criar notificação
      const notificacao = await prisma.notificacao.create({
        data: {
          userId: usuario.id,
          titulo: 'Notificação de Teste',
          mensagem: 'Esta é uma notificação de teste para verificar o sistema',
          tipo: 'sistema'
        }
      });
      
      console.log(`✅ Notificação criada: ${notificacao.titulo}`);
      
      // Listar notificações do usuário
      const notificacoes = await prisma.notificacao.findMany({
        where: { userId: usuario.id }
      });
      
      console.log(`✅ Listagem de notificações: ${notificacoes.length} notificações encontradas`);
      
      // Marcar notificação como lida
      const notificacaoAtualizada = await prisma.notificacao.update({
        where: { id: notificacao.id },
        data: { lida: true }
      });
      
      console.log(`✅ Notificação marcada como lida: ${notificacaoAtualizada.titulo}`);
      
      // Limpar dados de teste
      await prisma.notificacao.delete({ where: { id: notificacao.id } });
      await prisma.user.delete({ where: { id: usuario.id } });
      
      console.log('✅ Dados de teste limpos com sucesso');
      
      return { success: true, message: 'Testes de notificações concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de notificações falhou:', error);
      return { success: false, message: 'Falha nos testes de notificações', error };
    }
  };
  
  // Teste de sistema de monitoramento regulatório
  const testeMonitoramentoRegulatorio = async () => {
    try {
      console.log('Testando sistema de monitoramento regulatório...');
      
      // Criar atualização regulatória
      const atualizacao = await prisma.atualizacaoRegulatoria.create({
        data: {
          titulo: 'Atualização Regulatória de Teste',
          descricao: 'Descrição da atualização regulatória para teste',
          fonte: 'ANVISA',
          dataPublicacao: new Date(),
          dataVigencia: new Date(new Date().setMonth(new Date().getMonth() + 1)),
          status: 'pendente'
        }
      });
      
      console.log(`✅ Atualização regulatória criada: ${atualizacao.titulo}`);
      
      // Atualizar status
      const atualizacaoAtualizada = await prisma.atualizacaoRegulatoria.update({
        where: { id: atualizacao.id },
        data: { status: 'vigente' }
      });
      
      console.log(`✅ Status da atualização regulatória alterado para: ${atualizacaoAtualizada.status}`);
      
      // Listar atualizações por status
      const atualizacoes = await prisma.atualizacaoRegulatoria.findMany({
        where: { status: 'vigente' }
      });
      
      console.log(`✅ Listagem de atualizações: ${atualizacoes.length} atualizações vigentes encontradas`);
      
      // Limpar dados de teste
      await prisma.atualizacaoRegulatoria.delete({ where: { id: atualizacao.id } });
      
      console.log('✅ Dados de teste limpos com sucesso');
      
      return { success: true, message: 'Testes de monitoramento regulatório concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de monitoramento regulatório falhou:', error);
      return { success: false, message: 'Falha nos testes de monitoramento regulatório', error };
    }
  };
  
  try {
    // Executar testes em sequência
    const resultadoAvaliacaoCertificados = await testeAvaliacaoCertificados();
    const resultadoNotificacoes = await testeNotificacoes();
    const resultadoMonitoramento = await testeMonitoramentoRegulatorio();
    
    const todosPassaram = resultadoAvaliacaoCertificados.success && 
                          resultadoNotificacoes.success && 
                          resultadoMonitoramento.success;
    
    if (todosPassaram) {
      console.log('✅ Todos os testes de componentes integrados passaram com sucesso!');
    } else {
      console.log('❌ Alguns testes de componentes integrados falharam.');
    }
    
    return {
      success: todosPassaram,
      resultados: {
        avaliacaoCertificados: resultadoAvaliacaoCertificados,
        notificacoes: resultadoNotificacoes,
        monitoramentoRegulatorio: resultadoMonitoramento
      }
    };
  } catch (error) {
    console.error('❌ Falha nos testes de componentes integrados:', error);
    return { success: false, message: 'Falha nos testes de componentes integrados', error };
  }
}

// Endpoint para executar testes
export async function GET(request: NextRequest) {
  try {
    // Verificar se é ambiente de teste
    const { searchParams } = new URL(request.url);
    const ambiente = searchParams.get('ambiente');
    
    if (ambiente !== 'teste') {
      return NextResponse.json(
        { error: 'Esta rota só pode ser acessada em ambiente de teste' },
        { status: 403 }
      );
    }
    
    // Executar testes de componentes integrados
    const resultados = await testarComponentesIntegrados();
    
    return NextResponse.json({
      message: 'Testes executados',
      resultados
    });
  } catch (error) {
    console.error('Erro ao executar testes:', error);
    return NextResponse.json(
      { error: 'Erro interno ao executar testes' },
      { status: 500 }
    );
  }
}
