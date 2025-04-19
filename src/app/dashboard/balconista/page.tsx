'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

export default function DashboardBalconistaPage() {
  const router = useRouter();
  
  // Dados simulados para o dashboard
  const progressoModulos = {
    total: 12,
    concluidos: 2,
    emAndamento: 1,
    percentual: 16.67
  };
  
  const modulosRecentes = [
    {
      id: 'analgesicos-1',
      titulo: 'Princípios Ativos Comuns',
      categoria: 'Analgésicos',
      progresso: 100,
      concluido: true
    },
    {
      id: 'antigripais-1',
      titulo: 'Composição dos Antigripais',
      categoria: 'Antigripais',
      progresso: 100,
      concluido: true
    },
    {
      id: 'analgesicos-2',
      titulo: 'Indicações e Contraindicações',
      categoria: 'Analgésicos',
      progresso: 45,
      concluido: false
    }
  ];
  
  const avaliacoesRecentes = [
    {
      id: 'aval-1',
      titulo: 'Avaliação de Analgésicos',
      modulo: 'Princípios Ativos Comuns',
      categoria: 'Analgésicos',
      nota: 85,
      dataRealizacao: new Date(2025, 3, 10)
    },
    {
      id: 'aval-2',
      titulo: 'Avaliação de Antigripais',
      modulo: 'Composição dos Antigripais',
      categoria: 'Antigripais',
      nota: 90,
      dataRealizacao: new Date(2025, 3, 15)
    }
  ];
  
  const certificadosRecentes = [
    {
      id: 'cert-1',
      titulo: 'Analgésicos - Princípios Ativos Comuns',
      dataEmissao: new Date(2025, 3, 10),
      dataValidade: new Date(2026, 3, 10)
    },
    {
      id: 'cert-2',
      titulo: 'Antigripais - Composição e Uso Racional',
      dataEmissao: new Date(2025, 3, 15),
      dataValidade: new Date(2026, 3, 15)
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
      <h1 className="text-3xl font-bold mb-2">Dashboard do Balconista</h1>
      <p className="text-gray-600 mb-8">Bem-vindo ao seu painel de treinamento</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Progresso Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative h-24 w-24">
                <svg className="h-24 w-24" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-blue-600"
                    strokeWidth="8"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${progressoModulos.percentual * 2.51} 251.2`}
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                  <span className="text-2xl font-bold">{progressoModulos.percentual}%</span>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>{progressoModulos.concluidos} de {progressoModulos.total} módulos concluídos</p>
              <p>{progressoModulos.emAndamento} módulo(s) em andamento</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => router.push('/categorias')}
              className="w-full"
            >
              Continuar Treinamento
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Próximas Avaliações</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Analgésicos - Interações Medicamentosas</h4>
                <p className="text-sm text-gray-500">Disponível após conclusão do módulo</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <h4 className="font-medium">Antigripais - Uso Racional</h4>
                <p className="text-sm text-gray-500">Disponível após conclusão do módulo</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => router.push('/avaliacao')}
              variant="outline"
              className="w-full"
            >
              Ver Todas Avaliações
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Certificados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certificadosRecentes.map((certificado) => (
                <div key={certificado.id} className="bg-gray-50 p-3 rounded-md">
                  <h4 className="font-medium">{certificado.titulo}</h4>
                  <p className="text-sm text-gray-500">
                    Emitido em: {formatDate(certificado.dataEmissao)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => router.push('/certificados')}
              variant="outline"
              className="w-full"
            >
              Ver Todos Certificados
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Tabs defaultValue="modulos" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="modulos">Módulos Recentes</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações Realizadas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="modulos" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Módulo</th>
                  <th className="border p-2 text-left">Categoria</th>
                  <th className="border p-2 text-left">Progresso</th>
                  <th className="border p-2 text-left">Status</th>
                  <th className="border p-2 text-left">Ação</th>
                </tr>
              </thead>
              <tbody>
                {modulosRecentes.map((modulo) => (
                  <tr key={modulo.id} className="hover:bg-gray-50">
                    <td className="border p-2">{modulo.titulo}</td>
                    <td className="border p-2">{modulo.categoria}</td>
                    <td className="border p-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${modulo.progresso}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="border p-2">
                      {modulo.concluido ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Concluído
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          Em andamento
                        </span>
                      )}
                    </td>
                    <td className="border p-2">
                      <Button 
                        size="sm"
                        onClick={() => router.push(`/categorias/${modulo.categoria.toLowerCase()}`)}
                      >
                        {modulo.concluido ? 'Revisar' : 'Continuar'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="avaliacoes" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Avaliação</th>
                  <th className="border p-2 text-left">Módulo</th>
                  <th className="border p-2 text-left">Categoria</th>
                  <th className="border p-2 text-left">Nota</th>
                  <th className="border p-2 text-left">Data</th>
                  <th className="border p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {avaliacoesRecentes.map((avaliacao) => (
                  <tr key={avaliacao.id} className="hover:bg-gray-50">
                    <td className="border p-2">{avaliacao.titulo}</td>
                    <td className="border p-2">{avaliacao.modulo}</td>
                    <td className="border p-2">{avaliacao.categoria}</td>
                    <td className="border p-2">{avaliacao.nota}%</td>
                    <td className="border p-2">{formatDate(avaliacao.dataRealizacao)}</td>
                    <td className="border p-2">
                      {avaliacao.nota >= 70 ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Aprovado
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                          Reprovado
                        </span>
                      )}
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
