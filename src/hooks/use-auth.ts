import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Interface para o usuário autenticado
interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'FARMACEUTICO' | 'BALCONISTA';
  farmaciaId?: string;
  farmacia?: {
    id: string;
    nome: string;
  };
}

// Interface para dados de login
interface LoginData {
  email: string;
  password: string;
}

// Interface para dados de registro
interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FARMACEUTICO' | 'BALCONISTA';
  farmaciaId?: string;
  farmaciaNome?: string;
  farmaciaCnpj?: string;
  farmaciaEndereco?: string;
}

// Hook de autenticação
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Verificar sessão ao carregar o componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/auth/session');
        
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Erro ao verificar sessão:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // Função de login
  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao fazer login');
      }
      
      setUser(result.user);
      
      // Redirecionar com base no papel do usuário
      if (result.user.role === 'ADMIN') {
        router.push('/dashboard/admin');
      } else {
        router.push('/dashboard/balconista');
      }
      
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro durante o login');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Função de registro
  const register = async (data: RegisterData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao registrar');
      }
      
      // Redirecionar para login após registro bem-sucedido
      router.push('/auth/login');
      
      return result;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro durante o registro');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Função de logout
  const logout = async () => {
    try {
      setLoading(true);
      
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Erro ao fazer logout');
      }
      
      setUser(null);
      router.push('/auth/login');
    } catch (err) {
      console.error('Erro ao fazer logout:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
}
