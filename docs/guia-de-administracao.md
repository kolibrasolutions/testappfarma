# Guia de Administração - Sistema SaaS de Treinamento de Balconistas de Farmácia

## Sumário

1. [Introdução](#introdução)
2. [Acesso ao Painel Administrativo](#acesso-ao-painel-administrativo)
3. [Gerenciamento de Usuários](#gerenciamento-de-usuários)
4. [Gerenciamento de Conteúdo](#gerenciamento-de-conteúdo)
5. [Gerenciamento de Avaliações](#gerenciamento-de-avaliações)
6. [Monitoramento Regulatório](#monitoramento-regulatório)
7. [Relatórios e Estatísticas](#relatórios-e-estatísticas)
8. [Configurações do Sistema](#configurações-do-sistema)
9. [Backup e Restauração](#backup-e-restauração)
10. [Resolução de Problemas](#resolução-de-problemas)

## Introdução

Este guia de administração fornece instruções detalhadas para administradores do Sistema SaaS de Treinamento de Balconistas de Farmácia. Como administrador, você terá acesso a funcionalidades avançadas para gerenciar usuários, conteúdo, avaliações e configurações do sistema.

### Papéis de Usuário

O sistema possui três níveis de acesso:

- **ADMIN**: Acesso completo a todas as funcionalidades administrativas
- **FARMACEUTICO**: Acesso para gerenciar balconistas e visualizar relatórios
- **BALCONISTA**: Acesso apenas aos módulos de treinamento e avaliações

Este guia é destinado principalmente aos usuários com papel ADMIN, embora algumas seções também sejam relevantes para usuários FARMACEUTICO.

## Acesso ao Painel Administrativo

### Primeiro Acesso

Para acessar o painel administrativo pela primeira vez:

1. Acesse a página de login do sistema
2. Entre com as credenciais de administrador fornecidas durante a implantação
3. Ao fazer login pela primeira vez, você será solicitado a alterar sua senha
4. Após alterar a senha, você será redirecionado para o painel administrativo

### Navegação no Painel Administrativo

O painel administrativo está organizado nas seguintes seções:

- **Dashboard**: Visão geral do sistema com estatísticas e informações importantes
- **Usuários**: Gerenciamento de usuários e farmácias
- **Conteúdo**: Gerenciamento de categorias, módulos e medicamentos
- **Avaliações**: Gerenciamento de avaliações e certificados
- **Regulatório**: Monitoramento de atualizações regulatórias
- **Relatórios**: Geração e visualização de relatórios
- **Configurações**: Configurações gerais do sistema

## Gerenciamento de Usuários

### Visualizando Usuários

Para visualizar a lista de usuários:

1. No menu lateral, clique em "Usuários"
2. A lista de usuários será exibida com informações básicas
3. Use os filtros disponíveis para refinar a lista por papel, status ou farmácia
4. Clique em um usuário para ver detalhes completos

### Criando Novos Usuários

Para criar um novo usuário:

1. Na página de usuários, clique no botão "Adicionar Usuário"
2. Preencha o formulário com os dados do novo usuário:
   - Nome completo
   - Email (será usado para login)
   - Senha inicial
   - Papel (ADMIN, FARMACEUTICO ou BALCONISTA)
   - Farmácia associada (para FARMACEUTICO e BALCONISTA)
3. Clique em "Criar Usuário"
4. O sistema enviará um email ao novo usuário com instruções de acesso

### Editando Usuários

Para editar um usuário existente:

1. Localize o usuário na lista
2. Clique no ícone de edição (lápis) ou no nome do usuário
3. Atualize as informações necessárias
4. Clique em "Salvar Alterações"

### Desativando Usuários

Para desativar um usuário (sem excluir permanentemente):

1. Localize o usuário na lista
2. Clique no menu de ações (três pontos) e selecione "Desativar"
3. Confirme a ação na caixa de diálogo
4. O usuário será marcado como inativo e não poderá mais acessar o sistema

Para reativar um usuário desativado:

1. Use o filtro para mostrar usuários inativos
2. Localize o usuário na lista
3. Clique no menu de ações e selecione "Reativar"

### Gerenciamento de Farmácias

Para gerenciar farmácias:

1. No menu lateral, clique em "Usuários" e depois em "Farmácias"
2. A lista de farmácias será exibida
3. Para adicionar uma nova farmácia, clique em "Adicionar Farmácia"
4. Para editar uma farmácia, clique no ícone de edição
5. Para visualizar os usuários de uma farmácia, clique no nome da farmácia

## Gerenciamento de Conteúdo

### Categorias Terapêuticas

Para gerenciar categorias terapêuticas:

1. No menu lateral, clique em "Conteúdo" e depois em "Categorias"
2. A lista de categorias será exibida
3. Para adicionar uma nova categoria:
   - Clique em "Adicionar Categoria"
   - Preencha o nome, descrição e ordem
   - Clique em "Criar Categoria"
4. Para editar uma categoria:
   - Clique no ícone de edição
   - Atualize as informações
   - Clique em "Salvar Alterações"
5. Para reordenar categorias:
   - Clique em "Reordenar"
   - Arraste as categorias para a ordem desejada
   - Clique em "Salvar Ordem"

### Módulos de Treinamento

Para gerenciar módulos de treinamento:

1. No menu lateral, clique em "Conteúdo" e depois em "Módulos"
2. A lista de módulos será exibida
3. Para adicionar um novo módulo:
   - Clique em "Adicionar Módulo"
   - Selecione a categoria
   - Preencha o título, descrição, ordem e versão
   - Use o editor de conteúdo para criar o material do módulo
   - Adicione recursos multimídia conforme necessário
   - Clique em "Criar Módulo"
4. Para editar um módulo:
   - Clique no ícone de edição
   - Atualize as informações
   - Clique em "Salvar Alterações"
5. Para criar uma nova versão de um módulo:
   - Abra o módulo para edição
   - Clique em "Criar Nova Versão"
   - Faça as alterações necessárias
   - Atualize o número da versão
   - Clique em "Publicar Nova Versão"

### Editor de Conteúdo

O editor de conteúdo oferece as seguintes funcionalidades:

- Formatação de texto (negrito, itálico, sublinhado, etc.)
- Listas numeradas e com marcadores
- Inserção de imagens e vídeos
- Criação de tabelas
- Inserção de links
- Blocos de código para exemplos
- Blocos de destaque para informações importantes

Para inserir uma imagem:

1. Posicione o cursor onde deseja inserir a imagem
2. Clique no botão de imagem na barra de ferramentas
3. Selecione "Fazer upload" ou "Selecionar da biblioteca"
4. Selecione a imagem desejada
5. Ajuste o tamanho e alinhamento conforme necessário

### Medicamentos

Para gerenciar informações sobre medicamentos:

1. No menu lateral, clique em "Conteúdo" e depois em "Medicamentos"
2. A lista de medicamentos será exibida
3. Para adicionar um novo medicamento:
   - Clique em "Adicionar Medicamento"
   - Selecione a categoria terapêutica
   - Preencha as informações do medicamento (nome, princípio ativo, etc.)
   - Adicione informações detalhadas sobre indicações, contraindicações e efeitos adversos
   - Clique em "Criar Medicamento"
4. Para editar um medicamento:
   - Clique no ícone de edição
   - Atualize as informações
   - Clique em "Salvar Alterações"

## Gerenciamento de Avaliações

### Criando Avaliações

Para criar uma nova avaliação:

1. No menu lateral, clique em "Avaliações" e depois em "Gerenciar Avaliações"
2. Clique em "Adicionar Avaliação"
3. Selecione o módulo ao qual a avaliação estará associada
4. Preencha o título e descrição da avaliação
5. Defina os critérios de aprovação (pontuação mínima)
6. Clique em "Criar Avaliação"
7. Na próxima tela, adicione questões à avaliação

### Adicionando Questões

Para adicionar questões a uma avaliação:

1. Na página de edição da avaliação, clique em "Adicionar Questão"
2. Digite o enunciado da questão
3. Adicione as opções de resposta (mínimo 2, máximo 5)
4. Marque a opção correta
5. Clique em "Adicionar Questão"
6. Repita o processo para adicionar mais questões
7. Quando terminar, clique em "Finalizar Avaliação"

### Visualizando Resultados

Para visualizar os resultados das avaliações:

1. No menu lateral, clique em "Avaliações" e depois em "Resultados"
2. Selecione a avaliação desejada no filtro
3. Visualize a lista de resultados com informações sobre:
   - Usuário
   - Data de realização
   - Pontuação
   - Status (aprovado/reprovado)
4. Clique em um resultado para ver detalhes completos, incluindo as respostas do usuário

### Gerenciamento de Certificados

Para gerenciar certificados:

1. No menu lateral, clique em "Avaliações" e depois em "Certificados"
2. Visualize a lista de certificados emitidos
3. Use os filtros para refinar a lista por usuário, data ou categoria
4. Para revogar um certificado:
   - Clique no menu de ações e selecione "Revogar"
   - Informe o motivo da revogação
   - Confirme a ação
5. Para emitir um certificado manualmente:
   - Clique em "Emitir Certificado"
   - Selecione o usuário e a categoria
   - Preencha as informações do certificado
   - Clique em "Emitir"

## Monitoramento Regulatório

### Registrando Atualizações Regulatórias

Para registrar uma nova atualização regulatória:

1. No menu lateral, clique em "Regulatório"
2. Clique em "Adicionar Atualização"
3. Preencha as informações:
   - Título da atualização
   - Descrição detalhada
   - Fonte (ex: ANVISA)
   - Data de publicação
   - Data de vigência (se aplicável)
   - Status (pendente, vigente, arquivada)
4. Anexe documentos relevantes (PDFs, imagens)
5. Clique em "Registrar Atualização"

### Gerenciando Atualizações

Para gerenciar atualizações regulatórias:

1. No menu lateral, clique em "Regulatório"
2. Visualize a lista de atualizações
3. Use os filtros para refinar a lista por status ou data
4. Para atualizar o status:
   - Clique no menu de ações e selecione "Alterar Status"
   - Selecione o novo status
   - Clique em "Salvar"
5. Para editar uma atualização:
   - Clique no ícone de edição
   - Atualize as informações
   - Clique em "Salvar Alterações"

### Notificações Automáticas

O sistema enviará notificações automáticas nas seguintes situações:

- Quando uma nova atualização regulatória é registrada (para administradores)
- Quando uma atualização muda de status para "vigente" (para todos os usuários)
- Quando uma atualização afeta diretamente um módulo ou medicamento (para usuários relevantes)

Para configurar as notificações:

1. No menu lateral, clique em "Configurações" e depois em "Notificações"
2. Ajuste as configurações de notificação conforme necessário
3. Clique em "Salvar Configurações"

## Relatórios e Estatísticas

### Relatórios Disponíveis

O sistema oferece os seguintes relatórios:

- **Progresso dos Usuários**: Mostra o progresso de cada usuário nos módulos
- **Resultados de Avaliações**: Estatísticas sobre aprovações e reprovações
- **Certificados Emitidos**: Lista de certificados emitidos por período
- **Atividade do Sistema**: Estatísticas de uso do sistema
- **Conformidade Regulatória**: Status de conformidade com atualizações regulatórias

### Gerando Relatórios

Para gerar um relatório:

1. No menu lateral, clique em "Relatórios"
2. Selecione o tipo de relatório desejado
3. Configure os filtros e parâmetros:
   - Período de tempo
   - Usuários específicos ou grupos
   - Categorias ou módulos
   - Formato de saída (PDF, Excel, CSV)
4. Clique em "Gerar Relatório"
5. O relatório será processado e disponibilizado para download

### Dashboard Analítico

O dashboard analítico fornece uma visão geral do sistema com gráficos e indicadores:

1. No menu lateral, clique em "Dashboard"
2. Visualize os seguintes indicadores:
   - Total de usuários ativos
   - Módulos mais acessados
   - Taxa de conclusão de módulos
   - Taxa de aprovação em avaliações
   - Certificados emitidos recentemente
   - Atualizações regulatórias pendentes
3. Use os filtros para ajustar o período de análise
4. Clique em qualquer gráfico para ver detalhes adicionais

## Configurações do Sistema

### Configurações Gerais

Para ajustar as configurações gerais do sistema:

1. No menu lateral, clique em "Configurações" e depois em "Geral"
2. Ajuste as seguintes configurações:
   - Nome da plataforma
   - Logo e identidade visual
   - Informações de contato
   - Política de privacidade e termos de uso
3. Clique em "Salvar Configurações"

### Configurações de Email

Para configurar as notificações por email:

1. No menu lateral, clique em "Configurações" e depois em "Email"
2. Configure os seguintes parâmetros:
   - Servidor SMTP
   - Porta
   - Credenciais
   - Email de remetente
   - Modelos de email
3. Clique em "Salvar Configurações"
4. Clique em "Enviar Email de Teste" para verificar a configuração

### Configurações de Segurança

Para ajustar as configurações de segurança:

1. No menu lateral, clique em "Configurações" e depois em "Segurança"
2. Configure os seguintes parâmetros:
   - Política de senhas (complexidade, expiração)
   - Duração da sessão
   - Limite de tentativas de login
   - Autenticação de dois fatores
3. Clique em "Salvar Configurações"

## Backup e Restauração

### Backup Manual

Para realizar um backup manual do sistema:

1. No menu lateral, clique em "Configurações" e depois em "Backup"
2. Clique em "Iniciar Backup Manual"
3. Selecione os componentes a serem incluídos:
   - Banco de dados
   - Arquivos de upload
   - Configurações do sistema
4. Clique em "Iniciar Backup"
5. Aguarde a conclusão do processo
6. Faça download do arquivo de backup

### Backup Automático

Para configurar backups automáticos:

1. No menu lateral, clique em "Configurações" e depois em "Backup"
2. Na seção "Backup Automático", configure:
   - Frequência (diária, semanal, mensal)
   - Horário de execução
   - Número de backups a manter
   - Destino do backup (local ou nuvem)
3. Clique em "Salvar Configurações"

### Restauração

Para restaurar o sistema a partir de um backup:

1. No menu lateral, clique em "Configurações" e depois em "Backup"
2. Na seção "Restauração", clique em "Restaurar Backup"
3. Selecione o arquivo de backup ou faça upload de um arquivo
4. Selecione os componentes a serem restaurados
5. Clique em "Iniciar Restauração"
6. Confirme a ação (o sistema ficará indisponível durante o processo)
7. Aguarde a conclusão do processo

**Importante**: A restauração substituirá todos os dados atuais pelos dados do backup. Esta operação não pode ser desfeita.

## Resolução de Problemas

### Logs do Sistema

Para acessar os logs do sistema:

1. No menu lateral, clique em "Configurações" e depois em "Logs"
2. Selecione o tipo de log:
   - Logs de aplicação
   - Logs de acesso
   - Logs de erro
   - Logs de auditoria
3. Use os filtros para refinar a visualização por data, nível ou componente
4. Clique em "Exportar Logs" para baixar os logs para análise detalhada

### Problemas Comuns e Soluções

#### Usuários não conseguem fazer login

1. Verifique se o email está correto
2. Verifique se a conta não está desativada
3. Redefina a senha do usuário
4. Verifique os logs de acesso para mais detalhes

#### Conteúdo não aparece para os usuários

1. Verifique se o módulo está publicado
2. Verifique as permissões do usuário
3. Limpe o cache do sistema
4. Verifique se há problemas com arquivos multimídia

#### Certificados não são emitidos automaticamente

1. Verifique se o usuário foi aprovado na avaliação
2. Verifique se todos os módulos da categoria foram concluídos
3. Verifique as configurações de emissão de certificados
4. Emita o certificado manualmente se necessário

#### Sistema lento ou instável

1. Verifique a utilização de recursos do servidor
2. Limpe caches e arquivos temporários
3. Verifique se há muitos usuários simultâneos
4. Considere otimizar consultas ao banco de dados

### Suporte Técnico

Para obter suporte técnico adicional:

1. Consulte a documentação técnica completa
2. Entre em contato com a equipe de suporte através do email suporte@farmacia-app.com
3. Forneça detalhes específicos sobre o problema, incluindo:
   - Descrição detalhada
   - Passos para reproduzir
   - Capturas de tela
   - Logs relevantes

---

Este guia de administração fornece as informações necessárias para gerenciar o Sistema SaaS de Treinamento de Balconistas de Farmácia. Para informações técnicas mais detalhadas, consulte a documentação técnica.

Última atualização: 19 de abril de 2025
