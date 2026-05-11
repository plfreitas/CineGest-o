# CineGestão Squad Overview

Este documento define a hierarquia e os fluxos de trabalho da equipe de agentes especialistas para o projeto **CineGestão**.

## 👑 Orquestrador Master (Aiox)
**Persona:** Orion
**Função:** Receber diretrizes do Orquestrador Humano e gerenciar os *handoffs* para os leads técnicos. Garante a coerência global entre frontend, backend e regras de negócio.

---

## 🛠️ Pilares Técnicos

### 1. Backend & API (Node.js)
**Local:** `.antigravity/agents/cinegestao/backend/`
- **Lead:** `backend-lead`
  - **Database:** `database-mongo` (Modelagem de Filmes, Clientes, Aluguéis)
  - **Logic:** `business-logic-express` (Fluxos de locação, multas, disponibilidade)

### 2. Frontend & Interface (React Native / Expo 54)
**Local:** `.antigravity/agents/cinegestao/frontend/`
- **Lead:** `frontend-lead`
  - **Dev:** `dev-mobile` (Implementação de telas e lógica mobile Premium UI)
  - **UI/UX:** `ui-ux-design` (Gradients, Glassmorphism, Micro-animações)
  - **Integration:** `frontend-integration` (Consumo de APIs, estado global)

### 3. Governança & Academia
**Local:** `.antigravity/agents/cinegestao/governance/`
- **DevOps:** `devops-github` (Controle de versão, CI/CD, EAS Build)
- **Relatórios:** `reports-sava` (Documentação para Laboratório de Extensão Estácio e GitHub)

---

## 🔄 Fluxo de Trabalho (Handoff)

1. **Humano → Aiox:** Define uma nova funcionalidade ou correção.
2. **Aiox → Leads:** Desmembra em tarefas de Backend e Frontend seguindo o padrão Premium UI.
3. **Leads → Subagentes:**
   - `backend-lead` solicita ao `database-mongo` a persistência dos dados.
   - `frontend-lead` solicita ao `ui-ux-design` o refinamento visual premium.
4. **Execução:** Subagentes entregam artefatos aos Leads.
5. **Consolidação:** Aiox valida a integração e solicita ao `reports-sava` o registro da evolução e o commit sincronizado no GitHub.

---

## 🚀 Diretrizes de Operação (Modo Sincronizado)

Estas regras regem o ambiente de desenvolvimento atual:

1.  **Sincronização Ativa**: As definições de agentes e workflows são rastreadas pelo Git para garantir consistência entre os computadores da equipe.
2.  **Padrão Premium UI**: Todas as novas telas e componentes devem seguir a identidade visual moderna definida no Dashboard.
3.  **Expo SDK 54 & EAS**: O projeto utiliza a versão mais recente do Expo e o fluxo de build gerenciado (EAS).
4.  **Backend Integrado**: O Backend deve evoluir em conjunto com o App, garantindo rotas seguras e performáticas.

---
*Squad CineGestão - Operando em modo Sincronizado / Premium UI.*
