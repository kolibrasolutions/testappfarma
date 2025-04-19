'use client';

import React, { useEffect, useState } from 'react';

interface RegulatoryUpdateCheckProps {
  className?: string;
  lastUpdateDate: Date;
}

export function RegulatoryUpdateCheck({ className, lastUpdateDate }: RegulatoryUpdateCheckProps) {
  const [isOutdated, setIsOutdated] = useState(false);
  
  useEffect(() => {
    // Verificar se o conteúdo foi atualizado nos últimos 30 dias
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    setIsOutdated(lastUpdateDate < thirtyDaysAgo);
  }, [lastUpdateDate]);

  if (!isOutdated) return null;

  return (
    <div className={`bg-yellow-50 border border-yellow-200 p-4 rounded-md text-yellow-800 text-sm ${className}`}>
      <h4 className="font-semibold mb-2">Alerta de Atualização</h4>
      <p>
        Este conteúdo foi atualizado pela última vez em {lastUpdateDate.toLocaleDateString('pt-BR')}. 
        Podem ter ocorrido alterações regulatórias desde então.
      </p>
      <p className="mt-2">
        Recomendamos consultar a <a href="https://www.gov.br/anvisa/pt-br" className="underline font-medium" target="_blank" rel="noopener noreferrer">
          página oficial da ANVISA
        </a> para obter as informações mais recentes.
      </p>
    </div>
  );
}

export default RegulatoryUpdateCheck;
