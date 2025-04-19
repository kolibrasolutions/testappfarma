'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

interface Categoria {
  id: string;
  nome: string;
  descricao: string;
}

// Dados simulados para categorias
const categorias: Categoria[] = [
  {
    id: 'analgesicos',
    nome: 'Analgésicos',
    descricao: 'Medicamentos para alívio da dor'
  },
  {
    id: 'antigripais',
    nome: 'Antigripais',
    descricao: 'Medicamentos para sintomas de gripe e resfriado'
  },
  {
    id: 'antialergicos',
    nome: 'Antialérgicos',
    descricao: 'Medicamentos para alergias e reações alérgicas'
  },
  {
    id: 'antiacidos',
    nome: 'Antiácidos',
    descricao: 'Medicamentos para problemas digestivos e azia'
  },
  {
    id: 'vitaminas',
    nome: 'Vitaminas e Suplementos',
    descricao: 'Suplementos vitamínicos e minerais'
  },
  {
    id: 'topicos',
    nome: 'Medicamentos Tópicos',
    descricao: 'Pomadas, cremes e loções para uso externo'
  }
];

export default function CategoriasPage() {
  const router = useRouter();

  const handleCategoriaClick = (categoriaId: string) => {
    router.push(`/categorias/${categoriaId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Categorias Terapêuticas</h1>
      
      <p className="text-gray-700 mb-8">
        Selecione uma categoria para acessar os módulos de treinamento específicos sobre Medicamentos Isentos de Prescrição (MIPs).
      </p>
      
      <Tabs defaultValue="todas" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="todas">Todas as Categorias</TabsTrigger>
          <TabsTrigger value="em-progresso">Em Progresso</TabsTrigger>
          <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="todas" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((categoria) => (
              <Card key={categoria.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle>{categoria.nome}</CardTitle>
                  <CardDescription>{categoria.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Aprenda sobre indicações, contraindicações e uso adequado dos MIPs desta categoria.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleCategoriaClick(categoria.id)}
                    className="w-full"
                  >
                    Acessar Módulos
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="em-progresso" className="mt-0">
          <div className="text-center py-8">
            <p className="text-gray-500">Você ainda não iniciou nenhum módulo.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="concluidas" className="mt-0">
          <div className="text-center py-8">
            <p className="text-gray-500">Você ainda não concluiu nenhum módulo.</p>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
