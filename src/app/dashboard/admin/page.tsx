'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

export default function DashboardAdminPage() {
  const router = useRouter();
  
  // Dados simulados para o dashboard de administrador
  const estatisticas = {
    totalUsuarios: 156,
    balconistas: 120,
    farmaceuticos: 35,
    admins: 1,
    modulosConcluidos: 487,
    certificadosEmitidos: 215
  };
  
  const usuariosRecentes = [
    {
      id: 'user-1',
      nome: 'Maria Silva',
      email: 'maria.silva@farmacia.com',
      role: 'BALCONISTA',
      farmacia: 'Farmácia Central',
      dataRegistro: new Date(2025, 3, 15)
    },
    {
      id: 'user-2',
      nome: 'João Santos',
      email: 'joao.santos@farmacia.com',
      role: 'BALCONISTA',
      farmacia: 'Farmácia Central',
      dataRegistro: new Date(2025, 3, 14)
    },
    {
      id: 'user-3',
      nome: 'Ana Oliveira',
      email: 'ana.oliveira@farmacia.com',
      role: 'FARMACEUTICO',
      farmacia: 'Farmácia Central',
      dataRegistro: new Date(2025, 3, 12)
    },
    {
      id: 'user-4',
      nome: 'Carlos Pereira',
      email: 'carlos.pereira@farmacia.com',
      role: 'BALCONISTA',
      farmacia: 'Farmácia Saúde',
      dataRegistro: new Date(2025, 3, 10)
    },
    {
      id: 'user-5',
      nome: 'Fernanda Lima',
      email: 'fernanda.lima@farmacia.com',
      role: 'FARMACEUTICO',
      farmacia: 'Farmácia Saúde',
      dataRegistro: new Date(2025, 3, 8)
    }
  ];
  
  const farmaciasRecentes = [
    {
      id: 'farm-1',
      nome: 'Farmácia Central',
      cnpj: '12.345.678/0001-90',
      endereco: 'Av. Paulista, 1000, São Paulo - SP',
      totalUsuarios: 25,
      dataRegistro: new Date(2025, 2, 20)
    },
    {
      id: 'farm-2',
      nome: 'Farmácia Saúde',
      cnpj: '98.765.432/0001-10',
      endereco: 'Rua Augusta, 500, São Paulo - SP',
      totalUsuarios: 18,
      dataRegistro: new Date(2025, 2, 25)
    },
    {
      id: 'farm-3',
      nome: 'Drogaria Bem Estar',
      cnpj: '45.678.901/0001-23',
      endereco: 'Av. Brasil, 300, Rio de Janeiro - RJ',
      totalUsuarios: 22,
      dataRegistro: new Date(2025, 3, 5)
    }
  ];
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-2">Dashboard Administrativo</h1>
      <p className="text-gray-600 mb-8">Gerenciamento do sistema de treinamento</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold">{estatisticas.totalUsuarios}</p>
              <p className="text-sm text-gray-500 mt-2">Total de usuários registrados</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
              <div className="bg-blue-50 p-2 rounded-md">
                <p className="font-bold text-blue-700">{estatisticas.balconistas}</p>
                <p className="text-gray-500">Balconistas</p>
              </div>
              <div className="bg-green-50 p-2 rounded-md">
                <p className="font-bold text-green-700">{estatisticas.farmaceuticos}</p>
                <p className="text-gray-500">Farmacêuticos</p>
              </div>
              <div className="bg-purple-50 p-2 rounded-md">
                <p className="font-bold text-purple-700">{estatisticas.admins}</p>
                <p className="text-gray-500">Admins</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline"
              className="w-full"
            >
              Gerenciar Usuários
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Módulos Concluídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold">{estatisticas.modulosConcluidos}</p>
              <p className="text-sm text-gray-500 mt-2">Total de módulos concluídos</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Categoria mais popular</h4>
                <p className="text-sm text-gray-500">Analgésicos (152 conclusões)</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Módulo mais popular</h4>
                <p className="text-sm text-gray-500">Princípios Ativos Comuns (87 conclusões)</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline"
              className="w-full"
            >
              Ver Relatórios
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Certificados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold">{estatisticas.certificadosEmitidos}</p>
              <p className="text-sm text-gray-500 mt-2">Total de certificados emitidos</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Certificados este mês</h4>
                <p className="text-sm text-gray-500">45 certificados emitidos</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Taxa de aprovação</h4>
                <p className="text-sm text-gray-500">92% dos usuários são aprovados na primeira tentativa</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline"
              className="w-full"
            >
              Gerenciar Certificados
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs defaultValue="usuarios" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="usuarios">Usuários Recentes</TabsTrigger>
          <TabsTrigger value="farmacias">Farmácias</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usuarios" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Nome</th>
                  <th className="border p-2 text-left">Email</th>
                  <th className="border p-2 text-left">Função</th>
                  <th className="border p-2 text-left">Farmácia</th>
                  <th className="border p-2 text-left">Data de Registro</th>
                  <th className="border p-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuariosRecentes.map((usuario) => (
                  <tr key={usuario.id} className="hover:bg-gray-50">
                    <td className="border p-2">{usuario.nome}</td>
                    <td className="border p-2">{usuario.email}</td>
                    <td className="border p-2">
                      {usuario.role === 'BALCONISTA' && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          Balconista
                        </span>
                      )}
                      {usuario.role === 'FARMACEUTICO' && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Farmacêutico
                        </span>
                      )}
                      {usuario.role === 'ADMIN' && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                          Admin
                        </span>
                      )}
                    </td>
                    <td className="border p-2">{usuario.farmacia}</td>
                    <td className="border p-2">{formatDate(usuario.dataRegistro)}</td>
                    <td className="border p-2">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline" className="text-red-500">Desativar</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="farmacias" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Nome</th>
                  <th className="border p-2 text-left">CNPJ</th>
                  <th className="border p-2 text-left">Endereço</th>
                  <th className="border p-2 text-left">Usuários</th>
                  <th className="border p-2 text-left">Data de Registro</th>
                  <th className="border p-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {farmaciasRecentes.map((farmacia) => (
                  <tr key={farmacia.id} className="hover:bg-gray-50">
                    <td className="border p-2">{farmacia.nome}</td>
                    <td className="border p-2">{farmacia.cnpj}</td>
                    <td className="border p-2">{farmacia.endereco}</td>
                    <td className="border p-2">{farmacia.totalUsuarios}</td>
                    <td className="border p-2">{formatDate(farmacia.dataRegistro)}</td>
                    <td className="border p-2">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="outline">Ver Usuários</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
