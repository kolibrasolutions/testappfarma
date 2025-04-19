'use client';

import * as React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { isValidCNPJ } from '@/lib/utils';

const registerSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'A confirmação de senha deve ter pelo menos 6 caracteres'),
  role: z.enum(['BALCONISTA', 'FARMACEUTICO', 'ADMIN']),
  farmaciaId: z.string().optional(),
  farmaciaNome: z.string().optional(),
  farmaciaCnpj: z.string().optional().refine(
    (val) => !val || isValidCNPJ(val),
    { message: 'CNPJ inválido' }
  ),
  farmaciaEndereco: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword'],
}).refine(
  (data) => {
    if (data.role === 'BALCONISTA' || data.role === 'FARMACEUTICO') {
      return !!data.farmaciaId || (!!data.farmaciaNome && !!data.farmaciaCnpj && !!data.farmaciaEndereco);
    }
    return true;
  },
  {
    message: 'Informações da farmácia são obrigatórias para balconistas e farmacêuticos',
    path: ['farmaciaNome'],
  }
);

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [showFarmaciaFields, setShowFarmaciaFields] = React.useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'BALCONISTA',
    },
  });

  const role = watch('role');

  React.useEffect(() => {
    setShowFarmaciaFields(role === 'BALCONISTA' || role === 'FARMACEUTICO');
  }, [role]);

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      // Aqui será implementada a lógica de registro
      console.log('Dados de registro:', data);
      
      // Simulação de registro
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirecionamento após registro bem-sucedido
      // window.location.href = '/auth/login';
    } catch (error) {
      console.error('Erro ao registrar:', error);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registro</CardTitle>
        <CardDescription>
          Crie sua conta para acessar o sistema de treinamento
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@exemplo.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar senha</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="******"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role">Função</Label>
            <select
              id="role"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register('role')}
            >
              <option value="BALCONISTA">Balconista</option>
              <option value="FARMACEUTICO">Farmacêutico</option>
              <option value="ADMIN">Administrador</option>
            </select>
            {errors.role && (
              <p className="text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>
          
          {showFarmaciaFields && (
            <>
              <div className="space-y-2">
                <Label htmlFor="farmaciaNome">Nome da Farmácia</Label>
                <Input
                  id="farmaciaNome"
                  type="text"
                  placeholder="Nome da farmácia"
                  {...register('farmaciaNome')}
                />
                {errors.farmaciaNome && (
                  <p className="text-sm text-red-500">{errors.farmaciaNome.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmaciaCnpj">CNPJ da Farmácia</Label>
                <Input
                  id="farmaciaCnpj"
                  type="text"
                  placeholder="00.000.000/0000-00"
                  {...register('farmaciaCnpj')}
                />
                {errors.farmaciaCnpj && (
                  <p className="text-sm text-red-500">{errors.farmaciaCnpj.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmaciaEndereco">Endereço da Farmácia</Label>
                <Input
                  id="farmaciaEndereco"
                  type="text"
                  placeholder="Endereço completo"
                  {...register('farmaciaEndereco')}
                />
                {errors.farmaciaEndereco && (
                  <p className="text-sm text-red-500">{errors.farmaciaEndereco.message}</p>
                )}
              </div>
            </>
          )}
          
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Registrando...' : 'Registrar'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">
          Já tem uma conta?{' '}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Faça login
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
