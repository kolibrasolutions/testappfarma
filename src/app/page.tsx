'use client';

import React from 'react';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';
import { RegulatoryUpdateCheck } from '@/components/compliance/RegulatoryUpdateCheck';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Sistema de Treinamento de Balconistas de Farmácia
        </h1>
        
        <p className="text-center mb-12">
          Plataforma educativa para capacitação de balconistas sobre Medicamentos Isentos de Prescrição (MIPs)
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Módulos de Treinamento</h2>
            <p>Acesse conteúdos organizados por categorias terapêuticas e aprenda sobre MIPs.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Avaliações e Certificados</h2>
            <p>Teste seus conhecimentos e obtenha certificados de conclusão.</p>
          </div>
        </div>
        
        <div className="space-y-4 mt-8">
          <LegalDisclaimer />
          <RegulatoryUpdateCheck lastUpdateDate={new Date(2025, 3, 15)} />
        </div>
      </div>
    </main>
  );
}
