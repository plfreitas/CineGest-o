# PRD v2.0: CineGestão - Implementação Real (DevHub)

## 1. Visão Geral
Evoluir o protótipo estático para uma aplicação funcional conectada a um banco de dados, com foco em experiência do usuário e automação de processos de locação.

## 2. Novos Requisitos Funcionais
- **RF01: Busca Dinâmica**: O usuário deve filtrar filmes por título em tempo real na tela inicial.
- **RF02: Detalhes do Filme (Preview)**: Ao clicar em um filme, abrir uma tela com sinopse, gênero e trailer (placeholder).
- **RF03: Fluxo de Locação Persistente**: O registro de locação deve ser salvo no Banco de Dados (MongoDB) e não apenas no estado local.
- **RF04: Expansão de Catálogo**: Script para popular a base com +50 títulos variados.

## 3. Requisitos Técnicos
- **Frontend**: Implementar `FlatList` com filtros e navegação entre telas (`React Navigation`).
- **Conectividade**: Utilizar `Axios` para chamadas à API Node.js.
- **Backend**: Implementar rotas de `GET /movies/search` e `POST /rentals`.

---

# Backlog de Epics e Stories (Fase 2)

## Epic 1: Busca e Navegação
- **Story**: Como gerente, quero buscar um filme pelo nome para saber se ele está no acervo.
- **Story**: Como usuário, quero clicar em um filme para ver mais informações antes de alugar.

## Epic 2: Integração de Dados
- **Story**: Como desenvolvedor, quero conectar o App ao servidor local para exibir dados reais do banco.
- **Story**: Como desenvolvedor, quero popular o banco de dados com uma lista diversificada de filmes.

## Epic 3: Lógica de Negócio Real
- **Story**: Como gerente, quero que o status de "Alugado" seja atualizado no banco de dados após a conclusão da locação.
