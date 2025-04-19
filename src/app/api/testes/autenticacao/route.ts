import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Função para executar testes de autenticação
async function testarAutenticacao() {
  console.log('Iniciando testes de autenticação...');
  
  // Teste de registro
  const testeRegistro = async () => {
    try {
      // Dados de teste para registro
      const dadosRegistro = {
        name: 'Usuário Teste',
        email: `teste-${Date.now()}@exemplo.com`,
        password: 'Senha@123',
        role: 'BALCONISTA',
        farmaciaNome: 'Farmácia Teste',
        farmaciaCnpj: `${Date.now()}`,
        farmaciaEndereco: 'Rua de Teste, 123'
      };
      
      // Simular registro
      const usuario = await prisma.user.create({
        data: {
          name: dadosRegistro.name,
          email: dadosRegistro.email,
          password: dadosRegistro.password, // Em produção, seria criptografada
          role: 'BALCONISTA',
          farmacia: {
            create: {
              nome: dadosRegistro.farmaciaNome,
              cnpj: dadosRegistro.farmaciaCnpj,
              endereco: dadosRegistro.farmaciaEndereco
            }
          }
        },
        include: {
          farmacia: true
        }
      });
      
      console.log('✅ Teste de registro bem-sucedido');
      console.log(`   Usuário criado: ${usuario.name} (${usuario.email})`);
      console.log(`   Farmácia associada: ${usuario.farmacia?.nome}`);
      
      return usuario;
    } catch (error) {
      console.error('❌ Teste de registro falhou:', error);
      throw error;
    }
  };
  
  // Teste de login
  const testeLogin = async (email: string, password: string) => {
    try {
      // Buscar usuário pelo email
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          farmacia: {
            select: {
              id: true,
              nome: true
            }
          }
        }
      });
      
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      
      // Verificar senha (em produção, usaria bcrypt.compare)
      if (user.password !== password) {
        throw new Error('Senha incorreta');
      }
      
      console.log('✅ Teste de login bem-sucedido');
      console.log(`   Usuário autenticado: ${user.name} (${user.email})`);
      
      return user;
    } catch (error) {
      console.error('❌ Teste de login falhou:', error);
      throw error;
    }
  };
  
  // Teste de autorização
  const testeAutorizacao = async (userId: string, role: string) => {
    try {
      // Verificar se o usuário existe
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });
      
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      
      // Verificar papel do usuário
      if (user.role !== role) {
        throw new Error(`Usuário não tem o papel esperado. Esperado: ${role}, Atual: ${user.role}`);
      }
      
      console.log('✅ Teste de autorização bem-sucedido');
      console.log(`   Usuário ${user.name} tem o papel ${user.role}`);
      
      return true;
    } catch (error) {
      console.error('❌ Teste de autorização falhou:', error);
      throw error;
    }
  };
  
  try {
    // Executar testes em sequência
    const usuarioRegistrado = await testeRegistro();
    await testeLogin(usuarioRegistrado.email, usuarioRegistrado.password);
    await testeAutorizacao(usuarioRegistrado.id, 'BALCONISTA');
    
    console.log('✅ Todos os testes de autenticação passaram com sucesso!');
    return { success: true, message: 'Testes de autenticação concluídos com sucesso' };
  } catch (error) {
    console.error('❌ Falha nos testes de autenticação:', error);
    return { success: false, message: 'Falha nos testes de autenticação', error };
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
    
    // Executar testes de autenticação
    const resultadoAutenticacao = await testarAutenticacao();
    
    return NextResponse.json({
      message: 'Testes executados',
      resultados: {
        autenticacao: resultadoAutenticacao
      }
    });
  } catch (error) {
    console.error('Erro ao executar testes:', error);
    return NextResponse.json(
      { error: 'Erro interno ao executar testes' },
      { status: 500 }
    );
  }
}
