'use client';

import React, { useState } from 'react';

interface LGPDConsentProps {
  className?: string;
  onConsent: (hasConsented: boolean) => void;
}

export function LGPDConsent({ className, onConsent }: LGPDConsentProps) {
  const [hasConsented, setHasConsented] = useState(false);

  const handleConsent = () => {
    setHasConsented(true);
    onConsent(true);
    
    // Armazenar consentimento no localStorage
    localStorage.setItem('lgpd-consent', JSON.stringify({
      consented: true,
      timestamp: new Date().toISOString()
    }));
  };

  if (hasConsented) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <h4 className="font-semibold mb-2">Política de Privacidade e Proteção de Dados</h4>
        <p className="text-sm text-gray-700 mb-4">
          Em conformidade com a Lei Geral de Proteção de Dados (LGPD), informamos que coletamos e processamos 
          seus dados pessoais para fornecer nossos serviços educacionais e melhorar sua experiência. 
          Seus dados serão armazenados de forma segura e você pode solicitar acesso, correção ou exclusão 
          a qualquer momento.
        </p>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={() => window.open('/politica-privacidade', '_blank')}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            Ler política completa
          </button>
          <button 
            onClick={handleConsent}
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
          >
            Aceitar e continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LGPDConsent;
