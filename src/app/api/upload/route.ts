import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import prisma from '@/lib/prisma';

// Diretório para armazenamento de arquivos
const uploadsDir = join(process.cwd(), 'public', 'uploads');

export async function POST(request: NextRequest) {
  try {
    // Verificar autenticação
    // Em um cenário real, isso seria feito no middleware ou aqui
    
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const tipo = formData.get('tipo') as string;
    const entidadeId = formData.get('entidadeId') as string;
    
    if (!file || !tipo || !entidadeId) {
      return NextResponse.json(
        { error: 'Arquivo, tipo e ID da entidade são obrigatórios' },
        { status: 400 }
      );
    }
    
    // Validar tipo de arquivo
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Tipo de arquivo não permitido. Apenas JPEG, PNG, WebP e PDF são aceitos.' },
        { status: 400 }
      );
    }
    
    // Validar tamanho do arquivo (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'Tamanho do arquivo excede o limite de 5MB' },
        { status: 400 }
      );
    }
    
    // Gerar nome de arquivo único
    const fileExtension = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`;
    const filePath = join(uploadsDir, fileName);
    
    // Converter o arquivo para ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Salvar o arquivo
    await writeFile(filePath, buffer);
    
    // Salvar referência no banco de dados
    const arquivo = await prisma.arquivo.create({
      data: {
        nome: file.name,
        caminho: `/uploads/${fileName}`,
        tipo: file.type,
        tamanho: file.size,
        entidadeTipo: tipo,
        entidadeId
      }
    });
    
    return NextResponse.json(
      { 
        message: 'Arquivo enviado com sucesso',
        arquivo: {
          id: arquivo.id,
          nome: arquivo.nome,
          caminho: arquivo.caminho,
          tipo: arquivo.tipo
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Erro ao fazer upload de arquivo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
