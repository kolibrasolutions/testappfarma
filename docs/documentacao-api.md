# Documentação da API - Sistema SaaS de Treinamento de Balconistas de Farmácia

Esta documentação descreve os endpoints da API RESTful do Sistema SaaS de Treinamento de Balconistas de Farmácia, incluindo parâmetros, formatos de requisição e resposta, e exemplos de uso.

## Informações Gerais

- **URL Base**: `https://farmacia-app.vercel.app/api`
- **Formato de Dados**: JSON
- **Autenticação**: JWT via cookie HTTP-only
- **Codificação**: UTF-8

## Autenticação

### Login

Autentica um usuário e retorna um token JWT.

- **URL**: `/auth/login`
- **Método**: `POST`
- **Requer Autenticação**: Não

**Corpo da Requisição**:
```json
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "user": {
    "id": "user_id",
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "role": "BALCONISTA",
    "farmaciaId": "farmacia_id"
  }
}
```

**Resposta de Erro**:
- **Código**: 401 Unauthorized
- **Conteúdo**:
```json
{
  "error": "Credenciais inválidas"
}
```

### Registro

Registra um novo usuário no sistema.

- **URL**: `/auth/register`
- **Método**: `POST`
- **Requer Autenticação**: Não

**Corpo da Requisição**:
```json
{
  "name": "Nome do Usuário",
  "email": "usuario@exemplo.com",
  "password": "senha123",
  "role": "BALCONISTA",
  "farmaciaNome": "Nome da Farmácia",
  "farmaciaCnpj": "12345678901234",
  "farmaciaEndereco": "Endereço da Farmácia"
}
```

**Resposta de Sucesso**:
- **Código**: 201 Created
- **Conteúdo**:
```json
{
  "message": "Usuário registrado com sucesso",
  "user": {
    "id": "user_id",
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "role": "BALCONISTA"
  }
}
```

**Resposta de Erro**:
- **Código**: 400 Bad Request
- **Conteúdo**:
```json
{
  "error": "Email já está em uso"
}
```

### Logout

Encerra a sessão do usuário.

- **URL**: `/auth/logout`
- **Método**: `POST`
- **Requer Autenticação**: Sim

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "message": "Logout realizado com sucesso"
}
```

### Verificar Sessão

Verifica se o usuário está autenticado e retorna informações da sessão.

- **URL**: `/auth/session`
- **Método**: `GET`
- **Requer Autenticação**: Sim

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "user": {
    "id": "user_id",
    "name": "Nome do Usuário",
    "email": "usuario@exemplo.com",
    "role": "BALCONISTA",
    "farmaciaId": "farmacia_id"
  }
}
```

**Resposta de Erro**:
- **Código**: 401 Unauthorized
- **Conteúdo**:
```json
{
  "error": "Não autenticado"
}
```

## Categorias

### Listar Categorias

Retorna a lista de todas as categorias terapêuticas.

- **URL**: `/categorias`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de Query**:
  - `ordem` (opcional): Ordenar por campo específico
  - `direcao` (opcional): Direção da ordenação (asc/desc)

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "categorias": [
    {
      "id": "categoria_id",
      "nome": "Analgésicos e Antitérmicos",
      "descricao": "Medicamentos para dor e febre",
      "ordem": 1,
      "createdAt": "2025-04-01T00:00:00.000Z",
      "updatedAt": "2025-04-01T00:00:00.000Z"
    },
    {
      "id": "categoria_id_2",
      "nome": "Anti-inflamatórios",
      "descricao": "Medicamentos para inflamação",
      "ordem": 2,
      "createdAt": "2025-04-01T00:00:00.000Z",
      "updatedAt": "2025-04-01T00:00:00.000Z"
    }
  ]
}
```

### Obter Categoria

Retorna detalhes de uma categoria específica.

- **URL**: `/categorias/:categoria`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de URL**:
  - `categoria`: ID da categoria

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "categoria": {
    "id": "categoria_id",
    "nome": "Analgésicos e Antitérmicos",
    "descricao": "Medicamentos para dor e febre",
    "ordem": 1,
    "createdAt": "2025-04-01T00:00:00.000Z",
    "updatedAt": "2025-04-01T00:00:00.000Z",
    "modulos": [
      {
        "id": "modulo_id",
        "titulo": "Introdução aos Analgésicos",
        "descricao": "Conceitos básicos sobre analgésicos",
        "ordem": 1
      }
    ],
    "medicamentos": [
      {
        "id": "medicamento_id",
        "nome": "Paracetamol",
        "principioAtivo": "Paracetamol"
      }
    ]
  }
}
```

**Resposta de Erro**:
- **Código**: 404 Not Found
- **Conteúdo**:
```json
{
  "error": "Categoria não encontrada"
}
```

### Criar Categoria

Cria uma nova categoria terapêutica.

- **URL**: `/categorias`
- **Método**: `POST`
- **Requer Autenticação**: Sim (ADMIN)

**Corpo da Requisição**:
```json
{
  "nome": "Nova Categoria",
  "descricao": "Descrição da nova categoria",
  "ordem": 3
}
```

**Resposta de Sucesso**:
- **Código**: 201 Created
- **Conteúdo**:
```json
{
  "message": "Categoria criada com sucesso",
  "categoria": {
    "id": "nova_categoria_id",
    "nome": "Nova Categoria",
    "descricao": "Descrição da nova categoria",
    "ordem": 3,
    "createdAt": "2025-04-19T00:00:00.000Z",
    "updatedAt": "2025-04-19T00:00:00.000Z"
  }
}
```

### Atualizar Categoria

Atualiza uma categoria existente.

- **URL**: `/categorias/:categoria`
- **Método**: `PUT`
- **Requer Autenticação**: Sim (ADMIN)
- **Parâmetros de URL**:
  - `categoria`: ID da categoria

**Corpo da Requisição**:
```json
{
  "nome": "Categoria Atualizada",
  "descricao": "Descrição atualizada",
  "ordem": 4
}
```

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "message": "Categoria atualizada com sucesso",
  "categoria": {
    "id": "categoria_id",
    "nome": "Categoria Atualizada",
    "descricao": "Descrição atualizada",
    "ordem": 4,
    "createdAt": "2025-04-01T00:00:00.000Z",
    "updatedAt": "2025-04-19T00:00:00.000Z"
  }
}
```

### Excluir Categoria

Remove uma categoria existente.

- **URL**: `/categorias/:categoria`
- **Método**: `DELETE`
- **Requer Autenticação**: Sim (ADMIN)
- **Parâmetros de URL**:
  - `categoria`: ID da categoria

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "message": "Categoria excluída com sucesso"
}
```

## Módulos

### Listar Módulos

Retorna a lista de todos os módulos ou filtrados por categoria.

- **URL**: `/modulos`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de Query**:
  - `categoria` (opcional): ID da categoria para filtrar
  - `ordem` (opcional): Ordenar por campo específico
  - `direcao` (opcional): Direção da ordenação (asc/desc)

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "modulos": [
    {
      "id": "modulo_id",
      "titulo": "Introdução aos Analgésicos",
      "descricao": "Conceitos básicos sobre analgésicos",
      "ordem": 1,
      "versao": "1.0.0",
      "categoriaId": "categoria_id",
      "categoria": {
        "nome": "Analgésicos e Antitérmicos"
      },
      "createdAt": "2025-04-01T00:00:00.000Z",
      "updatedAt": "2025-04-01T00:00:00.000Z"
    }
  ]
}
```

### Obter Módulo

Retorna detalhes de um módulo específico.

- **URL**: `/modulos/:modulo`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de URL**:
  - `modulo`: ID do módulo

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "modulo": {
    "id": "modulo_id",
    "titulo": "Introdução aos Analgésicos",
    "descricao": "Conceitos básicos sobre analgésicos",
    "conteudo": "Conteúdo completo do módulo...",
    "ordem": 1,
    "versao": "1.0.0",
    "categoriaId": "categoria_id",
    "categoria": {
      "id": "categoria_id",
      "nome": "Analgésicos e Antitérmicos"
    },
    "avaliacoes": [
      {
        "id": "avaliacao_id",
        "titulo": "Avaliação de Analgésicos"
      }
    ],
    "createdAt": "2025-04-01T00:00:00.000Z",
    "updatedAt": "2025-04-01T00:00:00.000Z"
  }
}
```

## Medicamentos

### Listar Medicamentos

Retorna a lista de todos os medicamentos ou filtrados por categoria.

- **URL**: `/medicamentos`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de Query**:
  - `categoria` (opcional): ID da categoria para filtrar
  - `busca` (opcional): Termo para busca por nome ou princípio ativo

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "medicamentos": [
    {
      "id": "medicamento_id",
      "nome": "Paracetamol",
      "principioAtivo": "Paracetamol",
      "formaFarmaceutica": "Comprimido",
      "concentracao": "500mg",
      "categoriaId": "categoria_id",
      "categoria": {
        "nome": "Analgésicos e Antitérmicos"
      },
      "createdAt": "2025-04-01T00:00:00.000Z",
      "updatedAt": "2025-04-01T00:00:00.000Z"
    }
  ]
}
```

## Avaliações

### Submeter Avaliação

Submete as respostas de uma avaliação para correção.

- **URL**: `/avaliacoes/submeter`
- **Método**: `POST`
- **Requer Autenticação**: Sim

**Corpo da Requisição**:
```json
{
  "avaliacaoId": "avaliacao_id",
  "respostas": [0, 1, 2, 1, 0]
}
```

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "resultado": {
    "id": "resultado_id",
    "pontuacao": 80,
    "aprovado": true,
    "respostas": [0, 1, 2, 1, 0],
    "dataRealizacao": "2025-04-19T00:00:00.000Z"
  },
  "certificado": {
    "id": "certificado_id",
    "titulo": "Certificado de Analgésicos e Antitérmicos",
    "codigo": "CERT-12345",
    "dataEmissao": "2025-04-19T00:00:00.000Z",
    "dataValidade": "2026-04-19T00:00:00.000Z"
  }
}
```

## Certificados

### Verificar Certificado

Verifica a autenticidade de um certificado pelo código.

- **URL**: `/certificados/verificar/:codigo`
- **Método**: `GET`
- **Requer Autenticação**: Não
- **Parâmetros de URL**:
  - `codigo`: Código do certificado

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "certificado": {
    "id": "certificado_id",
    "titulo": "Certificado de Analgésicos e Antitérmicos",
    "codigo": "CERT-12345",
    "dataEmissao": "2025-04-19T00:00:00.000Z",
    "dataValidade": "2026-04-19T00:00:00.000Z",
    "user": {
      "name": "Nome do Usuário"
    }
  },
  "valido": true
}
```

**Resposta de Erro**:
- **Código**: 404 Not Found
- **Conteúdo**:
```json
{
  "error": "Certificado não encontrado",
  "valido": false
}
```

## Upload de Arquivos

### Enviar Arquivo

Envia um arquivo para o sistema.

- **URL**: `/upload`
- **Método**: `POST`
- **Requer Autenticação**: Sim
- **Tipo de Conteúdo**: `multipart/form-data`

**Parâmetros do Formulário**:
- `file`: Arquivo a ser enviado
- `tipo`: Tipo de entidade relacionada (ex: "modulo", "medicamento")
- `entidadeId`: ID da entidade relacionada

**Resposta de Sucesso**:
- **Código**: 201 Created
- **Conteúdo**:
```json
{
  "message": "Arquivo enviado com sucesso",
  "arquivo": {
    "id": "arquivo_id",
    "nome": "nome_do_arquivo.jpg",
    "caminho": "/uploads/12345-abcdef.jpg",
    "tipo": "image/jpeg"
  }
}
```

## Notificações

### Listar Notificações

Retorna a lista de notificações do usuário.

- **URL**: `/notificacoes`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de Query**:
  - `lidas` (opcional): Filtrar por notificações lidas (true/false)

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "notificacoes": [
    {
      "id": "notificacao_id",
      "titulo": "Novo módulo disponível",
      "mensagem": "Um novo módulo foi adicionado à categoria Analgésicos",
      "lida": false,
      "tipo": "sistema",
      "createdAt": "2025-04-19T00:00:00.000Z",
      "updatedAt": "2025-04-19T00:00:00.000Z"
    }
  ]
}
```

### Marcar Notificação como Lida

Marca uma notificação como lida.

- **URL**: `/notificacoes/:id`
- **Método**: `PATCH`
- **Requer Autenticação**: Sim
- **Parâmetros de URL**:
  - `id`: ID da notificação

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "message": "Notificação marcada como lida",
  "notificacao": {
    "id": "notificacao_id",
    "lida": true,
    "updatedAt": "2025-04-19T00:00:00.000Z"
  }
}
```

## Monitoramento Regulatório

### Listar Atualizações Regulatórias

Retorna a lista de atualizações regulatórias.

- **URL**: `/regulatorio`
- **Método**: `GET`
- **Requer Autenticação**: Sim
- **Parâmetros de Query**:
  - `status` (opcional): Filtrar por status (pendente/vigente/arquivada)

**Resposta de Sucesso**:
- **Código**: 200 OK
- **Conteúdo**:
```json
{
  "atualizacoes": [
    {
      "id": "atualizacao_id",
      "titulo": "Atualização da RDC nº 882/2024",
      "descricao": "Novas diretrizes para MIPs",
      "fonte": "ANVISA",
      "dataPublicacao": "2025-04-01T00:00:00.000Z",
      "dataVigencia": "2025-05-01T00:00:00.000Z",
      "status": "pendente",
      "createdAt": "2025-04-01T00:00:00.000Z",
      "updatedAt": "2025-04-01T00:00:00.000Z"
    }
  ]
}
```

## Códigos de Erro

A API utiliza os seguintes códigos de status HTTP:

- `200 OK`: Requisição bem-sucedida
- `201 Created`: Recurso criado com sucesso
- `400 Bad Request`: Parâmetros inválidos ou ausentes
- `401 Unauthorized`: Autenticação necessária ou inválida
- `403 Forbidden`: Sem permissão para acessar o recurso
- `404 Not Found`: Recurso não encontrado
- `409 Conflict`: Conflito com o estado atual do recurso
- `422 Unprocessable Entity`: Validação falhou
- `500 Internal Server Error`: Erro interno do servidor

## Limitações de Taxa

Para proteger a API contra abusos, as seguintes limitações de taxa são aplicadas:

- Endpoints públicos: 60 requisições por minuto por IP
- Endpoints autenticados: 120 requisições por minuto por usuário
- Endpoints de upload: 10 requisições por minuto por usuário

Quando o limite é excedido, a API retorna o código de status `429 Too Many Requests`.

---

Esta documentação da API fornece as informações necessárias para integrar com o Sistema SaaS de Treinamento de Balconistas de Farmácia. Para suporte adicional, entre em contato com a equipe de desenvolvimento.

Última atualização: 19 de abril de 2025
