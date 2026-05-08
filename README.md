# CineGestão - Sistema de Locação Premium 🎬

Sistema completo de gestão para locadoras de vídeo, desenvolvido como parte do Laboratório de Extensão da Estácio (SAVA). O foco do projeto é modernizar a operação da **Freitas Vídeo Locadora**, oferecendo uma interface mobile de alta fidelidade e um backend robusto.

## ✨ Funcionalidades Principais
- **Dashboard Executivo:** Visualização em tempo real do acervo, clientes e aluguéis ativos.
- **Gestão de Acervo:** Cadastro simplificado de novos títulos com categorização por gênero.
- **Fluxo de Locação:** Interface intuitiva para controle de aluguéis e devoluções.
- **Interface Premium:** Design em Dark Mode com estética AIOX, utilizando gradientes e micro-interações.

## 🚀 Tecnologias Utilizadas
- **Frontend:** React Native com Expo (SDK 54)
- **Design:** Lucide Icons & Expo Linear Gradient
- **Navegação:** React Navigation v7
- **Backend:** Node.js com Express
- **Banco de Dados:** MongoDB (Mongoose)

## 📦 Estrutura do Projeto
```
├── frontend/          # App Mobile (React Native + Expo)
│   ├── assets/        # Recursos visuais e posters
│   ├── src/           # Telas e componentes
│   └── metro.config.js # Configurações de bundler customizadas
├── backend/           # API REST (Node.js)
│   ├── src/           # Modelos e rotas
│   └── server.ts      # Ponto de entrada da API
└── docs/              # Documentação técnica e acadêmica
```

## 🛠️ Como Executar
1. Clone o repositório.
2. No diretório `frontend`, execute `npm install`.
3. Inicie o servidor mobile com `npx expo start`.
4. Utilize o app **Expo Go** para escanear o QR Code ou inserir a URL do servidor local.

---
**Desenvolvido por Pedro Freitas**
*Projeto acadêmico para fins de demonstração técnica.*
