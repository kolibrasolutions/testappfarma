'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

interface Avaliacao {
  id: string;
  titulo: string;
  moduloId: string;
  moduloTitulo: string;
  categoriaId: string;
  categoriaNome: string;
  totalQuestoes: number;
  tempoEstimado: number;
  notaMinima: number;
}

// Dados simulados para avaliações
const avaliacoes: Avaliacao[] = [
  {
    id: 'aval-1',
    titulo: 'Avaliação de Analgésicos',
    moduloId: 'analgesicos-1',
    moduloTitulo: 'Princípios Ativos Comuns',
    categoriaId: 'analgesicos',
    categoriaNome: 'Analgésicos',
    totalQuestoes: 10,
    tempoEstimado: 15,
    notaMinima: 70
  },
  {
    id: 'aval-2',
    titulo: 'Avaliação de Antigripais',
    moduloId: 'antigripais-1',
    moduloTitulo: 'Composição dos Antigripais',
    categoriaId: 'antigripais',
    categoriaNome: 'Antigripais',
    totalQuestoes: 8,
    tempoEstimado: 12,
    notaMinima: 70
  }
];

export default function AvaliacaoPage() {
  const router = useRouter();

  const handleIniciarAvaliacao = (avaliacaoId: string) => {
    // Aqui seria implementada a lógica para iniciar a avaliação
    console.log(`Iniciando avaliação: ${avaliacaoId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Avaliações Disponíveis</h1>
      
      <p className="text-gray-700 mb-8">
        Complete as avaliações para testar seu conhecimento e obter certificados.
      </p>
      
      {avaliacoes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {avaliacoes.map((avaliacao) => (
            <Card key={avaliacao.id}>
              <CardHeader className="pb-2">
                <CardTitle>{avaliacao.titulo}</CardTitle>
                <CardDescription>
                  Módulo: {avaliacao.moduloTitulo} ({avaliacao.categoriaNome})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total de questões:</span>
                    <span>{avaliacao.totalQuestoes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tempo estimado:</span>
                    <span>{avaliacao.tempoEstimado} minutos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Nota mínima para aprovação:</span>
                    <span>{avaliacao.notaMinima}%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleIniciarAvaliacao(avaliacao.id)}
                  className="w-full"
                >
                  Iniciar Avaliação
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Nenhuma avaliação disponível</h3>
          <p className="text-gray-600 mb-6">
            Complete os módulos de treinamento para desbloquear avaliações.
          </p>
          <Button onClick={() => router.push('/categorias')}>
            Explorar Módulos de Treinamento
          </Button>
        </div>
      )}
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-blue-800 text-sm mb-8">
        <h4 className="font-semibold mb-2">Sobre as Avaliações</h4>
        <p>
          As avaliações são compostas por questões de múltipla escolha e estudos de caso.
          Você precisa obter a nota mínima para ser aprovado e receber o certificado correspondente.
          Em caso de reprovação, você poderá refazer a avaliação após 24 horas.
        </p>
      </div>
      
      <div className="mt-8">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
