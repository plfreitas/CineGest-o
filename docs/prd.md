# PRD - CineGestão

**Projeto**: CineGestão - Solução Mobile para Locadoras Independentes
**Objetivo**: Sistema de gestão simplificado para microempreendedores de locação de filmes.
**Stack**: React Native (TypeScript), Node.js (Express), MongoDB.

## 1. Contexto e Problema
Muitas locadoras independentes ainda operam de forma manual ou com sistemas legados complexos. O CineGestão visa simplificar o controle de acervo e locações em uma interface mobile moderna e acessível.

## 2. Personas
- **Administrador (Dono da Locadora)**: Gerencia o catálogo, clientes e monitora locações.
- **Microempreendedor**: Foco em agilidade e baixo custo de infraestrutura.

## 3. Requisitos Funcionais (MVP)
- **RF01: Gerenciamento de Acervo (CRUD)**
  - O administrador deve poder cadastrar, editar, listar e excluir filmes.
  - Atributos: Título, Gênero, Sinopse, URL da Capa, Status (Disponível/Alugado).
- **RF02: Gerenciamento de Clientes**
  - Cadastro de clientes com Nome, CPF, Telefone e Endereço.
- **RF03: Fluxo de Locação**
  - Registro de locação vinculando um cliente a um filme.
  - Definição de data de locação e data prevista de devolução.
  - Atualização automática do status do filme para "false" (indisponível) no momento da locação.
- **RF04: Dashboard de Controle**
  - Visualização rápida de filmes alugados, devoluções pendentes e atrasadas.

## 4. Requisitos Não-Funcionais
- **RNF01**: Interface focada em acessibilidade (alto contraste, fontes legíveis).
- **RNF02**: API RESTful segura e documentada.
- **RNF03**: Armazenamento flexível usando NoSQL (MongoDB).

## 5. Critérios de Aceite para Entrega (Parte III - Estácio)
- Código fonte no GitHub.
- Screenshots das telas principais (Listagem de Filmes, Cadastro).
- Backend funcional conectando ao MongoDB.
