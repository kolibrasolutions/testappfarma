'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

interface Certificado {
  id: string;
  titulo: string;
  dataEmissao: Date;
  dataValidade: Date;
  codigo: string;
}

// Dados simulados para certificados
const certificados: Certificado[] = [
  {
    id: 'cert-1',
    titulo: 'Analgésicos - Princípios Ativos Comuns',
    dataEmissao: new Date(2025, 2, 15),
    dataValidade: new Date(2026, 2, 15),
    codigo: 'CERT-ANA-001-2025'
  },
  {
    id: 'cert-2',
    titulo: 'Antigripais - Composição e Uso Racional',
    dataEmissao: new Date(2025, 3, 5),
    dataValidade: new Date(2026, 3, 5),
    codigo: 'CERT-GRI-002-2025'
  }
];

export default function CertificadosPage() {
  const router = useRouter();
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleDownloadCertificado = (certificadoId: string) => {
    // Aqui seria implementada a lógica para download do certificado
    console.log(`Baixando certificado: ${certificadoId}`);
  };

  const handleVerificarAutenticidade = (codigo: string) => {
    // Aqui seria implementada a lógica para verificação de autenticidade
    console.log(`Verificando autenticidade do certificado: ${codigo}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Meus Certificados</h1>
      
      <p className="text-gray-700 mb-8">
        Aqui você encontra todos os certificados obtidos após a conclusão dos módulos de treinamento.
      </p>
      
      {certificados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {certificados.map((certificado) => (
            <Card key={certificado.id}>
              <CardHeader className="pb-2">
                <CardTitle>{certificado.titulo}</CardTitle>
                <CardDescription>
                  Código: {certificado.codigo}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Data de Emissão:</span>
                    <span>{formatDate(certificado.dataEmissao)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Válido até:</span>
                    <span>{formatDate(certificado.dataValidade)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button 
                  onClick={() => handleDownloadCertificado(certificado.id)}
                  className="w-full"
                >
                  Baixar Certificado
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleVerificarAutenticidade(certificado.codigo)}
                  className="w-full"
                >
                  Verificar Autenticidade
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Nenhum certificado encontrado</h3>
          <p className="text-gray-600 mb-6">
            Complete os módulos de treinamento para obter seus certificados.
          </p>
          <Button onClick={() => router.push('/categorias')}>
            Explorar Módulos de Treinamento
          </Button>
        </div>
      )}
      
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-blue-800 text-sm mb-8">
        <h4 className="font-semibold mb-2">Sobre os Certificados</h4>
        <p>
          Os certificados emitidos têm validade de 1 ano a partir da data de emissão. 
          Após este período, recomendamos realizar uma atualização do treinamento para 
          garantir que seu conhecimento esteja em conformidade com as regulamentações mais recentes.
        </p>
      </div>
      
      <div className="mt-8">
        <LegalDisclaimer />
      </div>
    </div>
  );
}
