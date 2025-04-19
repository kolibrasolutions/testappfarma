import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Função para executar testes de funcionalidades principais
async function testarFuncionalidadesPrincipais() {
  console.log('Iniciando testes de funcionalidades principais...');
  
  // Teste de gestão de categorias
  const testeCategorias = async () => {
    try {
      console.log('Testando gestão de categorias...');
      
      // Criar categoria
      const novaCategoria = await prisma.categoria.create({
        data: {
          nome: `Categoria Teste ${Date.now()}`,
          descricao: 'Descrição de teste para categoria',
          ordem: 1
        }
      });
      
      console.log(`✅ Categoria criada: ${novaCategoria.nome}`);
      
      // Atualizar categoria
      const categoriaAtualizada = await prisma.categoria.update({
        where: { id: novaCategoria.id },
        data: {
          descricao: 'Descrição atualizada para teste'
        }
      });
      
      console.log(`✅ Categoria atualizada: ${categoriaAtualizada.nome}`);
      
      // Listar categorias
      const categorias = await prisma.categoria.findMany();
      console.log(`✅ Listagem de categorias: ${categorias.length} categorias encontradas`);
      
      // Excluir categoria (limpeza)
      await prisma.categoria.delete({
        where: { id: novaCategoria.id }
      });
      
      console.log(`✅ Categoria excluída: ${novaCategoria.nome}`);
      
      return { success: true, message: 'Testes de categorias concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de categorias falhou:', error);
      return { success: false, message: 'Falha nos testes de categorias', error };
    }
  };
  
  // Teste de gestão de módulos
  const testeModulos = async () => {
    try {
      console.log('Testando gestão de módulos...');
      
      // Criar categoria para associar ao módulo
      const categoria = await prisma.categoria.create({
        data: {
          nome: `Categoria para Módulo ${Date.now()}`,
          descricao: 'Descrição de categoria para teste de módulo',
          ordem: 1
        }
      });
      
      // Criar módulo
      const novoModulo = await prisma.modulo.create({
        data: {
          titulo: `Módulo Teste ${Date.now()}`,
          descricao: 'Descrição de teste para módulo',
          conteudo: 'Conteúdo de teste para o módulo',
          ordem: 1,
          versao: '1.0.0',
          categoriaId: categoria.id
        }
      });
      
      console.log(`✅ Módulo criado: ${novoModulo.titulo}`);
      
      // Atualizar módulo
      const moduloAtualizado = await prisma.modulo.update({
        where: { id: novoModulo.id },
        data: {
          descricao: 'Descrição atualizada para teste de módulo',
          versao: '1.0.1'
        }
      });
      
      console.log(`✅ Módulo atualizado: ${moduloAtualizado.titulo} (versão ${moduloAtualizado.versao})`);
      
      // Listar módulos
      const modulos = await prisma.modulo.findMany({
        where: { categoriaId: categoria.id },
        include: { categoria: true }
      });
      
      console.log(`✅ Listagem de módulos: ${modulos.length} módulos encontrados na categoria ${categoria.nome}`);
      
      // Excluir módulo e categoria (limpeza)
      await prisma.modulo.delete({
        where: { id: novoModulo.id }
      });
      
      await prisma.categoria.delete({
        where: { id: categoria.id }
      });
      
      console.log(`✅ Módulo e categoria excluídos`);
      
      return { success: true, message: 'Testes de módulos concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de módulos falhou:', error);
      return { success: false, message: 'Falha nos testes de módulos', error };
    }
  };
  
  // Teste de gestão de medicamentos
  const testeMedicamentos = async () => {
    try {
      console.log('Testando gestão de medicamentos...');
      
      // Criar categoria para associar ao medicamento
      const categoria = await prisma.categoria.create({
        data: {
          nome: `Categoria para Medicamento ${Date.now()}`,
          descricao: 'Descrição de categoria para teste de medicamento',
          ordem: 1
        }
      });
      
      // Criar medicamento
      const novoMedicamento = await prisma.medicamento.create({
        data: {
          nome: `Medicamento Teste ${Date.now()}`,
          principioAtivo: 'Princípio Ativo Teste',
          formaFarmaceutica: 'Comprimido',
          concentracao: '500mg',
          indicacoes: 'Indicações de teste',
          contraindicacoes: 'Contraindicações de teste',
          efeitosAdversos: 'Efeitos adversos de teste',
          categoriaId: categoria.id
        }
      });
      
      console.log(`✅ Medicamento criado: ${novoMedicamento.nome}`);
      
      // Atualizar medicamento
      const medicamentoAtualizado = await prisma.medicamento.update({
        where: { id: novoMedicamento.id },
        data: {
          indicacoes: 'Indicações atualizadas para teste'
        }
      });
      
      console.log(`✅ Medicamento atualizado: ${medicamentoAtualizado.nome}`);
      
      // Listar medicamentos
      const medicamentos = await prisma.medicamento.findMany({
        where: { categoriaId: categoria.id },
        include: { categoria: true }
      });
      
      console.log(`✅ Listagem de medicamentos: ${medicamentos.length} medicamentos encontrados na categoria ${categoria.nome}`);
      
      // Excluir medicamento e categoria (limpeza)
      await prisma.medicamento.delete({
        where: { id: novoMedicamento.id }
      });
      
      await prisma.categoria.delete({
        where: { id: categoria.id }
      });
      
      console.log(`✅ Medicamento e categoria excluídos`);
      
      return { success: true, message: 'Testes de medicamentos concluídos com sucesso' };
    } catch (error) {
      console.error('❌ Teste de medicamentos falhou:', error);
      return { success: false, message: 'Falha nos testes de medicamentos', error };
    }
  };
  
  try {
    // Executar testes em sequência
    const resultadoCategorias = await testeCategorias();
    const resultadoModulos = await testeModulos();
    const resultadoMedicamentos = await testeMedicamentos();
    
    const todosPassaram = resultadoCategorias.success && 
                          resultadoModulos.success && 
                          resultadoMedicamentos.success;
    
    if (todosPassaram) {
      console.log('✅ Todos os testes de funcionalidades principais passaram com sucesso!');
    } else {
      console.log('❌ Alguns testes de funcionalidades principais falharam.');
    }
    
    return {
      success: todosPassaram,
      resultados: {
        categorias: resultadoCategorias,
        modulos: resultadoModulos,
        medicamentos: resultadoMedicamentos
      }
    };
  } catch (error) {
    console.error('❌ Falha nos testes de funcionalidades principais:', error);
    return { success: false, message: 'Falha nos testes de funcionalidades principais', error };
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
    
    // Executar testes de funcionalidades principais
    const resultados = await testarFuncionalidadesPrincipais();
    
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
