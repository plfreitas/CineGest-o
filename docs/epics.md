# Epics e Histórias de Usuário - CineGestão

## [EP01] Infraestrutura e Setup Inicial
*Objetivo: Configurar o ambiente de desenvolvimento e arquitetura base.*
- **[ST01]** Configuração do servidor Express com TypeScript.
- **[ST02]** Conexão com MongoDB (Atlas ou Local).
- **[ST03]** Inicialização do projeto React Native com TypeScript.

## [EP02] Módulo de Acervo (CRUD de Filmes)
*Objetivo: Permitir que o administrador gerencie o catálogo de filmes.*
- **[ST04]** Criação do modelo de dados `Movie`.
- **[ST05]** Endpoints de API para CRUD de filmes.
- **[ST06]** Tela de listagem de filmes no App Mobile.
- **[ST07]** Tela de cadastro/edição de filmes no App Mobile.

## [EP03] Gestão de Clientes e Locações
*Objetivo: Gerenciar o fluxo de aluguel.*
- **[ST08]** Modelo de dados `Client` e `Rental`.
- **[ST09]** API para registro de locação e devolução.
- **[ST10]** Tela de seleção de cliente para locação.
- **[ST11]** Lógica de alteração automática de status de disponibilidade.

## [EP04] Dashboard e Relatórios
*Objetivo: Fornecer visão gerencial ao administrador.*
- **[ST12]** Dashboard com resumo de locações ativas e atrasadas.
- **[ST13]** Filtros por gênero e status.
