# Plano de Testes do Sistema SaaS de Treinamento de Balconistas de Farmácia

## 1. Testes de Autenticação e Autorização

### 1.1 Registro de Usuário
- Verificar registro com dados válidos para cada tipo de usuário (ADMIN, FARMACEUTICO, BALCONISTA)
- Testar validações de campos obrigatórios
- Verificar tratamento de emails duplicados
- Testar criação de farmácia durante registro de farmacêutico/balconista

### 1.2 Login
- Verificar login com credenciais válidas
- Testar tratamento de credenciais inválidas
- Verificar redirecionamento após login bem-sucedido
- Testar persistência da sessão

### 1.3 Autorização
- Verificar acesso a rotas protegidas com usuário autenticado
- Testar bloqueio de acesso a rotas protegidas sem autenticação
- Verificar controle de acesso baseado em função (ADMIN vs BALCONISTA)
- Testar expiração e renovação de token JWT

## 2. Testes de Funcionalidades Principais

### 2.1 Gestão de Categorias
- Verificar listagem de categorias
- Testar criação de nova categoria
- Verificar atualização de categoria existente
- Testar exclusão de categoria
- Verificar validações e tratamento de erros

### 2.2 Gestão de Módulos
- Verificar listagem de módulos
- Testar criação de novo módulo
- Verificar atualização de módulo existente
- Testar exclusão de módulo
- Verificar associação com categorias
- Testar controle de versão de módulos

### 2.3 Gestão de Medicamentos
- Verificar listagem de medicamentos
- Testar criação de novo medicamento
- Verificar atualização de medicamento existente
- Testar exclusão de medicamento
- Verificar associação com categorias

### 2.4 Sistema de Avaliação
- Verificar criação de avaliações
- Testar submissão de respostas
- Verificar cálculo de pontuação
- Testar emissão de certificados para aprovados
- Verificar atualização de progresso do usuário

### 2.5 Certificados
- Verificar listagem de certificados
- Testar verificação de certificado por código
- Verificar validação de data de validade

## 3. Testes de Componentes Integrados

### 3.1 Upload de Arquivos
- Verificar upload de diferentes tipos de arquivos
- Testar validações de tamanho e formato
- Verificar armazenamento e recuperação de arquivos
- Testar associação com diferentes entidades

### 3.2 Sistema de Notificações
- Verificar criação de notificações
- Testar listagem de notificações por usuário
- Verificar marcação de notificações como lidas
- Testar exclusão de notificações

### 3.3 Monitoramento Regulatório
- Verificar registro de atualizações regulatórias
- Testar mudança de status de atualizações
- Verificar notificação automática de usuários
- Testar listagem filtrada por status

## 4. Testes de Interface e Experiência do Usuário

### 4.1 Responsividade
- Verificar adaptação em diferentes tamanhos de tela
- Testar em dispositivos móveis, tablets e desktops
- Verificar comportamento de menus e navegação

### 4.2 Acessibilidade
- Verificar contraste de cores
- Testar navegação por teclado
- Verificar textos alternativos para imagens
- Testar compatibilidade com leitores de tela

### 4.3 Usabilidade
- Verificar clareza de mensagens de erro
- Testar fluxos de navegação principais
- Verificar consistência de design
- Testar tempo de resposta e feedback visual

## 5. Testes de Segurança

### 5.1 Proteção de Dados
- Verificar criptografia de senhas
- Testar proteção contra injeção SQL
- Verificar validação de entrada de dados
- Testar proteção contra XSS

### 5.2 Controle de Acesso
- Verificar proteção contra acesso não autorizado
- Testar escalação de privilégios
- Verificar proteção de rotas sensíveis
- Testar expiração de sessão

## 6. Testes de Performance

### 6.1 Tempo de Resposta
- Verificar tempo de carregamento de páginas
- Testar tempo de resposta de endpoints da API
- Verificar performance com múltiplos usuários

### 6.2 Carga
- Testar comportamento sob carga moderada
- Verificar limites de upload de arquivos
- Testar múltiplas requisições simultâneas

## 7. Testes de Conformidade

### 7.1 Regulatória
- Verificar conformidade com RDC nº 882/2024
- Testar conformidade com IN nº 285/2024
- Verificar avisos legais e disclaimers

### 7.2 LGPD
- Verificar consentimento para coleta de dados
- Testar mecanismos de exclusão de dados
- Verificar políticas de privacidade
