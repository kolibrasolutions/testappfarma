import { NextRequest, NextResponse } from 'next/server';
import * as bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

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

export async function POST(request: NextRequest) {
  try {
    const body: RegisterData = await request.json();
    const { name, email, password, role, farmaciaId, farmaciaNome, farmaciaCnpj, farmaciaEndereco } = body;

    // Validar dados de entrada
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    // Verificar se o email já está em uso
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'Este email já está em uso' },
        { status: 400 }
      );
    }

    // Verificar se é necessário criar uma nova farmácia
    let userFarmaciaId = farmaciaId;
    
    if (!farmaciaId && (role === 'BALCONISTA' || role === 'FARMACEUTICO')) {
      if (!farmaciaNome || !farmaciaCnpj || !farmaciaEndereco) {
        return NextResponse.json(
          { error: 'Informações da farmácia são obrigatórias para balconistas e farmacêuticos' },
          { status: 400 }
        );
      }
      
      // Verificar se a farmácia já existe pelo CNPJ
      const existingFarmacia = await prisma.farmacia.findUnique({
        where: { cnpj: farmaciaCnpj }
      });
      
      if (existingFarmacia) {
        userFarmaciaId = existingFarmacia.id;
      } else {
        // Criar nova farmácia
        const newFarmacia = await prisma.farmacia.create({
          data: {
            nome: farmaciaNome,
            cnpj: farmaciaCnpj,
            endereco: farmaciaEndereco
          }
        });
        
        userFarmaciaId = newFarmacia.id;
      }
    }

    // Criptografar senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        farmaciaId: userFarmaciaId
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        farmaciaId: true,
        createdAt: true
      }
    });

    return NextResponse.json(
      { 
        message: 'Usuário registrado com sucesso',
        user: newUser
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro no registro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
