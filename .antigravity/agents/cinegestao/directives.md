# Diretrizes de Operação - Squad CineGestão

## 🛡️ Segurança e Privacidade
- **REGRAS DE OURO:** 
  1. Não usar `git add .` sem conferir arquivos sensíveis.
  2. Arquivos de inteligência (`.antigravity/agents/`) e workflows agora devem ser sincronizados com o GitHub para garantir a consistência entre ambientes.
  3. Segredos (`.env`, chaves privadas) devem permanecer **ESTRITAMENTE LOCAIS**.
  4. O histórico do GitHub deve documentar a evolução técnica e a orquestração do squad.

## 📱 Frontend (Expo SDK 54)
- O projeto foi migrado para o **Expo SDK 54**.
- Manter o foco no padrão **Premium UI** (Gradients, Glassmorphism, Micro-animações).
- Utilizar `lucide-react-native` e `expo-linear-gradient` como bibliotecas base para a UI.
- Configurar e manter o fluxo de build via **EAS Build**.

## 🔙 Backend
- O backend serve dados via API REST para o frontend mobile.
- Seguir o padrão de rotas documentado no `server.ts`.
- Garantir que novas rotas integrem-se perfeitamente com a lógica de filmes e aluguéis.

## 📝 Documentação (SAVA & GitHub)
- Documentar o progresso técnico com foco nas evidências para o Laboratório de Extensão.
- Sincronizar o README e as stories para refletir o estado real do projeto.

---
*Atualizado por Aiox-Master (Orion) em 11/05/2026*
