# CineGestão 🎬

> Solução mobile para gestão de locadoras independentes — projeto acadêmico de extensão universitária.

## Sobre o Projeto

**CineGestão** é um aplicativo mobile desenvolvido em **React Native (Expo)** com backend **Node.js + MongoDB Atlas**, criado como projeto de extensão da Estácio de Sá. O objetivo é digitalizar e modernizar a gestão de locadoras de filmes independentes, substituindo controles manuais por um sistema intuitivo e acessível.

## Tecnologias

| Camada | Tecnologia |
|:---|:---|
| **Mobile** | React Native + Expo SDK 54 |
| **Navegação** | React Navigation 7 |
| **Backend** | Node.js + Express + TypeScript |
| **Banco de Dados** | MongoDB Atlas (cloud) |
| **Segurança** | Helmet + Rate Limiting |
| **Deploy** | EAS Update (Expo) |

## Funcionalidades

- 🎬 Catálogo de filmes com busca em tempo real
- 📊 Dashboard com estatísticas (filmes disponíveis, alugados)
- 🔍 Busca por título e gênero via API REST
- 🛒 Fluxo de aluguel de filmes
- ➕ Cadastro de novos filmes
- 🌙 Interface dark mode

## Estrutura

```
CineGest-o/
├── backend/          # API REST (Node.js + Express + MongoDB)
│   └── src/
│       ├── server.ts     # Servidor principal
│       ├── models/       # Models do MongoDB
│       └── seed.ts       # Dados iniciais
├── frontend/         # App React Native (Expo)
│   └── src/
│       ├── screens/      # Telas do app
│       └── services/     # Integração com API
└── docs/             # Documentação do projeto
```

## Como Rodar Localmente

### Backend
```bash
cd backend
npm install
# Criar arquivo .env com MONGO_URI
npx ts-node src/server.ts
```

### Frontend
```bash
cd frontend
npm install
npx expo start
```

Escaneie o QR Code com o **Expo Go** (Android/iOS).

## Testar via Expo Go

Acesse o app publicado diretamente no Expo Go:

1. Instale o [Expo Go](https://expo.dev/go) no celular
2. Abra o Expo Go → "Enter URL manually"
3. Cole o link do projeto

> **Nota:** O app carrega dados locais como fallback caso o backend esteja offline.

## Autor

**Pedro Luís Santos Freitas** — Estácio de Sá, 2025/2026  
Projeto de Extensão — Programação para Dispositivos Móveis em Android (305)
