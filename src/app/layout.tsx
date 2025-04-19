'use client';

import React from 'react';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { LegalDisclaimer } from '@/components/compliance/LegalDisclaimer';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-blue-600">
            Farmácia App
          </a>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user.name}
              </span>
              
              <div className="relative group">
                <Button variant="ghost" size="sm">
                  Menu
                </Button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <a 
                    href={user.role === 'ADMIN' ? '/dashboard/admin' : '/dashboard/balconista'} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dashboard
                  </a>
                  <a 
                    href="/categorias" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Categorias
                  </a>
                  <a 
                    href="/avaliacao" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Avaliações
                  </a>
                  <a 
                    href="/certificados" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Certificados
                  </a>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <a href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900">
                Login
              </a>
              <a href="/auth/register">
                <Button size="sm">Registrar</Button>
              </a>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <LegalDisclaimer />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                &copy; 2025 Sistema de Treinamento de Balconistas de Farmácia. Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Termos de Uso
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
