'use client';

import React from 'react';

interface LegalDisclaimerProps {
  className?: string;
}

export function LegalDisclaimer({ className }: LegalDisclaimerProps) {
  return (
    <div className={`bg-amber-50 border border-amber-200 p-4 rounded-md text-amber-800 text-sm ${className}`}>
      <h4 className="font-semibold mb-2">Aviso Legal</h4>
      <p>
        Este conteúdo possui caráter exclusivamente educativo e não substitui a orientação, 
        supervisão e responsabilidade técnica do farmacêutico. Todas as informações estão 
        em conformidade com a RDC nº 882/2024 e IN nº 285/2024 da ANVISA.
      </p>
      <p className="mt-2">
        Sempre consulte a Lista de Medicamentos Isentos de Prescrição (LMIP) oficial e atualizada 
        da ANVISA antes de realizar qualquer atendimento ao cliente.
      </p>
    </div>
  );
}

export default LegalDisclaimer;
