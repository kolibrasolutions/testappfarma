'use client';

import React from 'react';

interface TermsOfUseProps {
  className?: string;
}

export function TermsOfUse({ className }: TermsOfUseProps) {
  return (
    <div className={`bg-white border border-gray-200 p-6 rounded-md text-gray-800 ${className}`}>
      <h2 className="text-xl font-bold mb-4">Termos de Uso</h2>
      
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">1. Aceitação dos Termos</h3>
        <p className="text-sm">
          Ao acessar e utilizar esta plataforma de treinamento, você concorda com estes Termos de Uso
          e com nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos,
          não deverá utilizar nossos serviços.
        </p>
      </section>
      
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">2. Limitação de Responsabilidade</h3>
        <p className="text-sm">
          O conteúdo desta plataforma possui caráter exclusivamente educativo e não substitui a orientação,
          supervisão e responsabilidade técnica do farmacêutico. Todas as informações estão em conformidade
          com a RDC nº 882/2024 e IN nº 285/2024 da ANVISA, porém é responsabilidade do usuário verificar
          as atualizações regulatórias mais recentes.
        </p>
      </section>
      
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">3. Supervisão Farmacêutica</h3>
        <p className="text-sm">
          Reforçamos que o atendimento ao cliente em farmácias deve sempre ocorrer sob supervisão do
          farmacêutico responsável técnico, conforme legislação vigente. O balconista deve respeitar
          os limites legais de sua atuação e encaminhar ao farmacêutico todas as situações que exijam
          avaliação técnica especializada.
        </p>
      </section>
      
      <section className="mb-4">
        <h3 className="text-lg font-semibold mb-2">4. Fontes Oficiais</h3>
        <p className="text-sm">
          Recomendamos sempre consultar as fontes oficiais da ANVISA e dos Conselhos de Farmácia para
          obter as informações mais atualizadas sobre a regulamentação de medicamentos e práticas farmacêuticas.
        </p>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold mb-2">5. Atualizações dos Termos</h3>
        <p className="text-sm">
          Estes termos podem ser atualizados periodicamente para refletir mudanças na legislação ou
          em nossos serviços. Recomendamos verificar regularmente esta página para estar ciente de
          quaisquer alterações.
        </p>
      </section>
    </div>
  );
}

export default TermsOfUse;
