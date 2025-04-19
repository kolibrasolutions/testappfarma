"use client";

import { useState } from 'react';
import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';

export default function NovaFarmaciaPage() {
  // Estados para o formulário
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [plano, setPlano] = useState('basico');
  const [status, setStatus] = useState('pendente');
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  // Função para formatar CNPJ
  const formatarCNPJ = (valor: string) => {
    // Remove caracteres não numéricos
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Aplica a máscara do CNPJ: XX.XXX.XXX/XXXX-XX
    return apenasNumeros
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .substring(0, 18);
  };

  // Função para formatar telefone
  const formatarTelefone = (valor: string) => {
    // Remove caracteres não numéricos
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Aplica a máscara de telefone: (XX) XXXXX-XXXX
    return apenasNumeros
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2')
      .substring(0, 15);
  };

  // Função para validar o formulário
  const validarFormulario = () => {
    if (!nome) {
      setErro('O nome da farmácia é obrigatório');
      return false;
    }
    
    if (!cnpj || cnpj.replace(/\D/g, '').length !== 14) {
      setErro('CNPJ inválido');
      return false;
    }
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErro('Email inválido');
      return false;
    }
    
    if (!telefone || telefone.replace(/\D/g, '').length < 10) {
      setErro('Telefone inválido');
      return false;
    }
    
    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    
    if (!validarFormulario()) {
      return;
    }
    
    setEnviando(true);
    
    // Simulação de envio para o servidor
    setTimeout(() => {
      setEnviando(false);
      setSucesso(true);
      
      // Limpar formulário após sucesso
      setNome('');
      setCnpj('');
      setEmail('');
      setTelefone('');
      setEndereco('');
      setPlano('basico');
      setStatus('pendente');
      
      // Redirecionar após alguns segundos
      setTimeout(() => {
        window.location.href = '/admin/farmacias';
      }, 3000);
    }, 1500);
  };

  return (
    <AdminLayout>
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Nova Farmácia</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Cadastre uma nova farmácia no sistema
          </p>
        </div>
        <Link 
          href="/admin/farmacias" 
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Voltar para lista
        </Link>
      </div>
      
      {/* Formulário de cadastro */}
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        {sucesso ? (
          <div className="rounded-md bg-green-50 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Farmácia cadastrada com sucesso!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Você será redirecionado para a lista de farmácias em instantes.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {erro && (
              <div className="rounded-md bg-red-50 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{erro}</h3>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome da Farmácia *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700">
                  CNPJ *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="cnpj"
                    id="cnpj"
                    value={cnpj}
                    onChange={(e) => setCnpj(formatarCNPJ(e.target.value))}
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                  Telefone *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                    placeholder="(XX) XXXXX-XXXX"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
                  Endereço
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="endereco"
                    id="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="plano" className="block text-sm font-medium text-gray-700">
                  Plano *
                </label>
                <div className="mt-1">
                  <select
                    id="plano"
                    name="plano"
                    value={plano}
                    onChange={(e) => setPlano(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  >
                    <option value="basico">Básico</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status *
                </label>
                <div className="mt-1">
                  <select
                    id="status"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  >
                    <option value="pendente">Pendente</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => window.location.href = '/admin/farmacias'}
                className="mr-3 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={enviando}
                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  enviando ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {enviando ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Cadastrando...
                  </>
                ) : (
                  'Cadastrar Farmácia'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      
      {/* Informações sobre planos */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
          Informações sobre os planos
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border rounded-lg p-4">
            <h4 className="text-md font-semibold text-gray-800">Plano Básico</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Até 5 usuários</li>
              <li>• Acesso aos flashcards</li>
              <li>• Acesso ao quiz básico</li>
              <li>• Relatórios simplificados</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 border-blue-200 bg-blue-50">
            <h4 className="text-md font-semibold text-gray-800">Plano Intermediário</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Até 10 usuários</li>
              <li>• Acesso aos flashcards</li>
              <li>• Acesso ao quiz completo</li>
              <li>• Relatórios detalhados</li>
              <li>• Consulta de medicamentos</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 border-purple-200 bg-purple-50">
            <h4 className="text-md font-semibold text-gray-800">Plano Premium</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Usuários ilimitados</li>
              <li>• Acesso a todos os recursos</li>
              <li>• Relatórios avançados</li>
              <li>• Consulta de medicamentos</li>
              <li>• Suporte prioritário</li>
              <li>• Personalização de conteúdo</li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
