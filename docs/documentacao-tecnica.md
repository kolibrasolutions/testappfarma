# Documentação Técnica - Sistema SaaS de Treinamento de Balconistas de Farmácia

## Sumário

1. [Visão Geral da Arquitetura](#visão-geral-da-arquitetura)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Banco de Dados](#banco-de-dados)
5. [Autenticação e Autorização](#autenticação-e-autorização)
6. [API RESTful](#api-restful)
7. [Frontend](#frontend)
8. [Componentes Principais](#componentes-principais)
9. [Sistemas Integrados](#sistemas-integrados)
10. [Implantação](#implantação)
11. [Monitoramento e Logs](#monitoramento-e-logs)
12. [Considerações de Segurança](#considerações-de-segurança)

## Visão Geral da Arquitetura

O Sistema SaaS de Treinamento de Balconistas de Farmácia segue uma arquitetura moderna baseada em microserviços, com separação clara entre frontend e backend. A aplicação é construída como uma Single Page Application (SPA) que se comunica com uma API RESTful.

### Diagrama de Arquitetura

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Cliente   │     │   Servidor  │     │   Banco de  │
│  (Browser)  │◄───►│  (Next.js)  │◄───►│    Dados    │
└─────────────┘     └─────────────┘     └─────────────┘
                          │
                          ▼
                    ┌─────────────┐
                    │  Serviços   │
                    │  Externos   │
                    └─────────────┘
```

### Fluxo de Dados

1. O cliente (navegador) faz requisições HTTP para o servidor
2. O servidor processa as requisições através do Next.js App Router
3. As operações de dados são realizadas através do Prisma ORM
4. O banco de dados PostgreSQL armazena todos os dados do sistema
5. Respostas são enviadas de volta ao cliente em formato JSON
6. O cliente renderiza a interface com React e Tailwind CSS

## Stack Tecnológico

### Frontend
- **Framework**: Next.js 15.1.4
- **Biblioteca UI**: React 18.2.0
- **Estilização**: Tailwind CSS
- **Componentes**: shadcn/ui (baseado em Radix UI)
- **Gerenciamento de Formulários**: React Hook Form + Zod
- **Gerenciamento de Estado**: React Context API
- **Requisições HTTP**: Fetch API nativa

### Backend
- **Framework**: Next.js API Routes (App Router)
- **Runtime**: Node.js
- **ORM**: Prisma
- **Autenticação**: JWT (JSON Web Tokens)
- **Validação**: Zod

### Banco de Dados
- **SGBD**: PostgreSQL
- **Migrations**: Prisma Migrate
- **Seed Data**: Scripts Prisma

### DevOps
- **Hospedagem**: Vercel
- **CI/CD**: Vercel Integrations
- **Versionamento**: Git
- **Containerização**: Docker (desenvolvimento)

### Ferramentas de Desenvolvimento
- **Gerenciador de Pacotes**: pnpm
- **Linting**: ESLint
- **Formatação**: Prettier
- **Testes**: Jest + Testing Library

## Estrutura do Projeto

```
farmacia-app/
├── docs/                    # Documentação
├── prisma/                  # Schema e migrações do Prisma
│   ├── schema.prisma        # Definição do schema do banco de dados
│   └── migrations/          # Migrações do banco de dados
├── public/                  # Arquivos estáticos
│   └── uploads/             # Arquivos enviados pelos usuários
├── src/
│   ├── app/                 # Rotas do Next.js App Router
│   │   ├── api/             # Endpoints da API
│   │   ├── auth/            # Páginas de autenticação
│   │   ├── categorias/      # Páginas de categorias
│   │   ├── dashboard/       # Páginas de dashboard
│   │   └── ...              # Outras páginas
│   ├── components/          # Componentes React
│   │   ├── ui/              # Componentes de UI básicos
│   │   ├── compliance/      # Componentes de conformidade
│   │   └── ...              # Outros componentes
│   ├── contexts/            # Contextos React
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Bibliotecas e utilitários
│   │   ├── prisma.ts        # Cliente Prisma
│   │   └── utils.ts         # Funções utilitárias
│   ├── providers.tsx        # Providers da aplicação
│   └── middleware.ts        # Middleware do Next.js
├── .env                     # Variáveis de ambiente
├── next.config.js           # Configuração do Next.js
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind
└── vercel.json              # Configuração da Vercel
```

## Banco de Dados

### Modelo de Dados

O sistema utiliza um banco de dados relacional PostgreSQL com o seguinte modelo:

#### Entidades Principais

- **User**: Usuários do sistema (Administradores, Farmacêuticos, Balconistas)
- **Farmacia**: Farmácias associadas aos usuários
- **Categoria**: Categorias terapêuticas
- **Modulo**: Módulos de treinamento
- **Medicamento**: Informações sobre medicamentos MIPs
- **Avaliacao**: Avaliações de conhecimento
- **Questao**: Questões das avaliações
- **ResultadoAvaliacao**: Resultados das avaliações realizadas
- **Certificado**: Certificados emitidos
- **Progresso**: Progresso dos usuários nos módulos
- **Arquivo**: Arquivos enviados ao sistema
- **Notificacao**: Notificações do sistema
- **AtualizacaoRegulatoria**: Atualizações na legislação

### Relacionamentos

- Um **User** pode estar associado a uma **Farmacia**
- Uma **Categoria** contém vários **Modulos** e **Medicamentos**
- Um **Modulo** contém várias **Avaliacoes**
- Uma **Avaliacao** contém várias **Questoes**
- Um **User** tem vários registros de **Progresso**, **ResultadoAvaliacao** e **Certificado**

### Prisma Schema

O schema completo do Prisma está definido em `prisma/schema.prisma` e inclui todas as entidades, relacionamentos e índices necessários para o funcionamento do sistema.

## Autenticação e Autorização

### Fluxo de Autenticação

1. O usuário submete credenciais (email/senha)
2. O servidor valida as credenciais contra o banco de dados
3. Se válidas, um token JWT é gerado e enviado como cookie HTTP-only
4. O token contém o ID do usuário, email, nome e papel (role)
5. Requisições subsequentes incluem o cookie com o token
6. O middleware valida o token em cada requisição protegida

### Middleware de Autorização

O sistema implementa um middleware de autorização em `src/middleware.ts` que:

1. Verifica se a rota atual requer autenticação
2. Valida o token JWT presente no cookie
3. Verifica permissões baseadas no papel do usuário
4. Redireciona para login quando necessário
5. Adiciona informações do usuário aos headers da requisição

### Controle de Acesso Baseado em Funções (RBAC)

O sistema implementa três níveis de acesso:

- **ADMIN**: Acesso completo ao sistema, incluindo gerenciamento de usuários e conteúdo
- **FARMACEUTICO**: Acesso para gerenciar balconistas e visualizar relatórios
- **BALCONISTA**: Acesso aos módulos de treinamento e avaliações

## API RESTful

A API do sistema segue os princípios RESTful e está organizada nos seguintes endpoints:

### Autenticação

- `POST /api/auth/login`: Autenticação de usuários
- `POST /api/auth/register`: Registro de novos usuários
- `POST /api/auth/logout`: Logout de usuários
- `GET /api/auth/session`: Verificação de sessão atual

### Categorias

- `GET /api/categorias`: Lista todas as categorias
- `POST /api/categorias`: Cria uma nova categoria
- `GET /api/categorias/:id`: Obtém detalhes de uma categoria
- `PUT /api/categorias/:id`: Atualiza uma categoria
- `DELETE /api/categorias/:id`: Remove uma categoria

### Módulos

- `GET /api/modulos`: Lista todos os módulos
- `POST /api/modulos`: Cria um novo módulo
- `GET /api/modulos/:id`: Obtém detalhes de um módulo
- `PUT /api/modulos/:id`: Atualiza um módulo
- `DELETE /api/modulos/:id`: Remove um módulo

### Medicamentos

- `GET /api/medicamentos`: Lista todos os medicamentos
- `POST /api/medicamentos`: Cria um novo medicamento
- `GET /api/medicamentos/:id`: Obtém detalhes de um medicamento
- `PUT /api/medicamentos/:id`: Atualiza um medicamento
- `DELETE /api/medicamentos/:id`: Remove um medicamento

### Avaliações

- `GET /api/avaliacoes`: Lista todas as avaliações
- `POST /api/avaliacoes`: Cria uma nova avaliação
- `GET /api/avaliacoes/:id`: Obtém detalhes de uma avaliação
- `PUT /api/avaliacoes/:id`: Atualiza uma avaliação
- `DELETE /api/avaliacoes/:id`: Remove uma avaliação
- `POST /api/avaliacoes/submeter`: Submete respostas para uma avaliação

### Certificados

- `GET /api/certificados`: Lista certificados do usuário
- `GET /api/certificados/:id`: Obtém detalhes de um certificado
- `GET /api/certificados/verificar/:codigo`: Verifica autenticidade de um certificado

### Progresso

- `GET /api/usuarios/progresso`: Obtém progresso do usuário
- `POST /api/usuarios/progresso`: Atualiza progresso do usuário

### Upload de Arquivos

- `POST /api/upload`: Envia um arquivo para o sistema

### Notificações

- `GET /api/notificacoes`: Lista notificações do usuário
- `POST /api/notificacoes`: Cria uma nova notificação
- `PATCH /api/notificacoes/:id`: Marca notificação como lida
- `DELETE /api/notificacoes/:id`: Remove uma notificação

### Monitoramento Regulatório

- `GET /api/regulatorio`: Lista atualizações regulatórias
- `POST /api/regulatorio`: Registra nova atualização regulatória
- `PUT /api/regulatorio/:id`: Atualiza uma atualização regulatória
- `DELETE /api/regulatorio/:id`: Remove uma atualização regulatória

## Frontend

### Componentes UI

O sistema utiliza componentes do shadcn/ui, que são baseados no Radix UI e estilizados com Tailwind CSS. Os principais componentes incluem:

- **Button**: Botões com variantes (primary, secondary, ghost)
- **Card**: Cartões para exibição de conteúdo
- **Input**: Campos de entrada de texto
- **Tabs**: Abas para organização de conteúdo
- **Toast**: Notificações temporárias
- **Dialog**: Modais para interações
- **Form**: Componentes de formulário

### Páginas Principais

- **Home**: Página inicial com visão geral do sistema
- **Auth**: Páginas de login e registro
- **Dashboard**: Painel de controle para diferentes tipos de usuário
- **Categorias**: Listagem e detalhes de categorias
- **Módulos**: Conteúdo educativo organizado por módulos
- **Avaliações**: Sistema de avaliação de conhecimento
- **Certificados**: Visualização e verificação de certificados

### Hooks Personalizados

- **useAuth**: Gerenciamento de autenticação
- **useToast**: Sistema de notificações toast
- **useForm**: Integração com React Hook Form e Zod

## Componentes Principais

### Sistema de Autenticação

O sistema de autenticação é implementado usando JWT armazenados em cookies HTTP-only, com middleware para proteção de rotas e verificação de permissões.

### Sistema de Avaliação

O sistema de avaliação permite:
- Criação de questões de múltipla escolha
- Configuração de pontuação e critérios de aprovação
- Correção automática de avaliações
- Emissão de certificados para aprovados

### Sistema de Certificados

O sistema de certificados:
- Gera certificados com códigos únicos
- Permite download em formato PDF
- Oferece verificação pública de autenticidade
- Controla validade dos certificados

### Sistema de Notificações

O sistema de notificações:
- Envia alertas sobre novos conteúdos
- Notifica sobre atualizações regulatórias
- Informa sobre resultados de avaliações
- Permite configuração de preferências

### Sistema de Upload de Arquivos

O sistema de upload:
- Valida tipos e tamanhos de arquivos
- Armazena arquivos de forma segura
- Associa arquivos a diferentes entidades
- Controla acesso aos arquivos

## Sistemas Integrados

### Monitoramento Regulatório

O sistema de monitoramento regulatório:
- Registra atualizações na legislação
- Notifica usuários sobre mudanças relevantes
- Mantém histórico de atualizações
- Permite rastreamento de conformidade

### Conformidade LGPD

O sistema implementa medidas para conformidade com a LGPD:
- Consentimento explícito para coleta de dados
- Mecanismos para exclusão de dados pessoais
- Política de privacidade clara e acessível
- Segurança no armazenamento de dados

## Implantação

### Ambiente de Produção

O sistema é implantado na plataforma Vercel, que oferece:
- Integração contínua com o repositório Git
- Implantação automática a cada push
- Certificados SSL automáticos
- CDN global para melhor performance

### Configuração da Vercel

O arquivo `vercel.json` contém as configurações necessárias para a implantação, incluindo:
- Framework utilizado (Next.js)
- Comando de build
- Diretório de saída
- Configurações de rotas

### Variáveis de Ambiente

As seguintes variáveis de ambiente são necessárias:
- `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL
- `JWT_SECRET`: Chave secreta para geração e validação de tokens JWT
- `NEXTAUTH_URL`: URL base da aplicação
- `NEXTAUTH_SECRET`: Chave secreta para Next Auth (se utilizado)

## Monitoramento e Logs

### Logs do Sistema

O sistema gera logs para:
- Erros de aplicação
- Tentativas de acesso não autorizado
- Operações críticas (ex: alterações em conteúdo)
- Performance de endpoints

### Monitoramento de Performance

O monitoramento de performance inclui:
- Tempo de resposta de endpoints
- Uso de recursos do servidor
- Tempo de carregamento de páginas
- Erros de cliente e servidor

## Considerações de Segurança

### Proteção de Dados

- Senhas armazenadas com hash bcrypt
- Dados sensíveis criptografados
- Tokens JWT com expiração adequada
- Cookies HTTP-only para armazenamento de tokens

### Prevenção de Ataques

- Proteção contra injeção SQL via Prisma ORM
- Validação de entrada com Zod
- Proteção contra XSS
- Rate limiting para endpoints sensíveis
- Proteção contra CSRF

### Backup e Recuperação

- Backups diários do banco de dados
- Procedimentos de recuperação documentados
- Retenção de backups por 30 dias
- Testes regulares de restauração

---

Esta documentação técnica fornece uma visão geral da arquitetura e implementação do Sistema SaaS de Treinamento de Balconistas de Farmácia. Para informações mais detalhadas sobre componentes específicos, consulte a documentação de código e comentários no repositório.

Última atualização: 19 de abril de 2025
