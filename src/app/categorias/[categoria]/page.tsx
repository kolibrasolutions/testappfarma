'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';
import { RegulatoryUpdateCheck } from '@/components/compliance/RegulatoryUpdateCheck';

// Dados simulados para categorias
const categorias = {
  'analgesicos': {
    id: 'analgesicos',
    nome: 'Analgésicos',
    descricao: 'Medicamentos para alívio da dor',
    modulos: [
      {
        id: 'analgesicos-1',
        titulo: 'Princípios Ativos Comuns',
        descricao: 'Conheça os principais princípios ativos dos analgésicos MIPs'
      },
      {
        id: 'analgesicos-2',
        titulo: 'Indicações e Contraindicações',
        descricao: 'Aprenda sobre as indicações e contraindicações dos analgésicos'
      },
      {
        id: 'analgesicos-3',
        titulo: 'Interações Medicamentosas',
        descricao: 'Entenda as principais interações medicamentosas dos analgésicos'
      }
    ],
    medicamentos: [
      {
        id: 'med-1',
        nome: 'Paracetamol',
        principioAtivo: 'Paracetamol',
        formaFarmaceutica: 'Comprimido',
        concentracao: '500mg e 750mg'
      },
      {
        id: 'med-2',
        nome: 'Dipirona',
        principioAtivo: 'Dipirona Sódica',
        formaFarmaceutica: 'Comprimido, Solução Oral',
        concentracao: '500mg, 1g/mL'
      },
      {
        id: 'med-3',
        nome: 'Ibuprofeno',
        principioAtivo: 'Ibuprofeno',
        formaFarmaceutica: 'Comprimido, Suspensão Oral',
        concentracao: '200mg, 400mg, 600mg, 50mg/mL'
      }
    ]
  },
  'antigripais': {
    id: 'antigripais',
    nome: 'Antigripais',
    descricao: 'Medicamentos para sintomas de gripe e resfriado',
    modulos: [
      {
        id: 'antigripais-1',
        titulo: 'Composição dos Antigripais',
        descricao: 'Conheça os componentes comuns nos antigripais MIPs'
      },
      {
        id: 'antigripais-2',
        titulo: 'Uso Racional de Antigripais',
        descricao: 'Aprenda sobre o uso correto e racional de antigripais'
      }
    ],
    medicamentos: [
      {
        id: 'med-4',
        nome: 'Resfenol',
        principioAtivo: 'Paracetamol + Maleato de Clorfeniramina + Cloridrato de Fenilefrina',
        formaFarmaceutica: 'Comprimido',
        concentracao: '400mg + 4mg + 4mg'
      },
      {
        id: 'med-5',
        nome: 'Benegrip',
        principioAtivo: 'Dipirona + Maleato de Clorfeniramina + Cafeína',
        formaFarmaceutica: 'Comprimido',
        concentracao: '500mg + 2mg + 30mg'
      }
    ]
  }
};

export default function CategoriaDetalhePage() {
  const params = useParams();
  const router = useRouter();
  const categoriaId = params.categoria as string;
  
  // Verificar se a categoria existe
  const categoria = categorias[categoriaId as keyof typeof categorias];
  
  if (!categoria) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Categoria não encontrada</h1>
        <p className="text-gray-700 mb-8">
          A categoria que você está procurando não existe.
        </p>
        <Button onClick={() => router.push('/categorias')}>
          Voltar para Categorias
        </Button>
      </div>
    );
  }

  const handleModuloClick = (moduloId: string) => {
    // Aqui seria a navegação para o módulo específico
    console.log(`Acessando módulo: ${moduloId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Button 
        variant="outline" 
        onClick={() => router.push('/categorias')}
        className="mb-6"
      >
        ← Voltar para Categorias
      </Button>
      
      <h1 className="text-3xl font-bold mb-2">{categoria.nome}</h1>
      <p className="text-gray-700 mb-8">{categoria.descricao}</p>
      
      <Tabs defaultValue="modulos" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="modulos">Módulos de Aprendizagem</TabsTrigger>
          <TabsTrigger value="medicamentos">Medicamentos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="modulos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoria.modulos.map((modulo) => (
              <Card key={modulo.id} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle>{modulo.titulo}</CardTitle>
                  <CardDescription>{modulo.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Este módulo contém conteúdo educativo validado por farmacêuticos.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => handleModuloClick(modulo.id)}
                    className="w-full"
                  >
                    Iniciar Módulo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="medicamentos" className="mt-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Nome</th>
                  <th className="border p-2 text-left">Princípio Ativo</th>
                  <th className="border p-2 text-left">Forma Farmacêutica</th>
                  <th className="border p-2 text-left">Concentração</th>
                </tr>
              </thead>
              <tbody>
                {categoria.medicamentos.map((medicamento) => (
                  <tr key={medicamento.id} className="hover:bg-gray-50">
                    <td className="border p-2">{medicamento.nome}</td>
                    <td className="border p-2">{medicamento.principioAtivo}</td>
                    <td className="border p-2">{medicamento.formaFarmaceutica}</td>
                    <td className="border p-2">{medicamento.concentracao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="space-y-4 mt-8">
        <LegalDisclaimer />
        <RegulatoryUpdateCheck lastUpdateDate={new Date(2025, 3, 15)} />
      </div>
    </div>
  );
}
