# ROTEIRO DEFINITIVO DE APRESENTAÇÃO: CINEGESTÃO (MÁX. 7 MINUTOS)

Este roteiro foi otimizado para equilibrar os critérios técnicos (Engenharia e Banco de Dados) e o caráter social de Extensão Universitária exigidos pela banca avaliadora da Estácio.

---

## ⏱️ Cronograma de Controle de Tempo

* **Parte 1: Introdução, Diagnóstico e Conexão Humana** (0:00 - 1:30) — *Tempo sugerido: 1min 30s*
* **Parte 2: A Engenharia de Solução e Arquitetura** (1:30 - 3:30) — *Tempo sugerido: 2min 00s*
* **Parte 3: Demonstração Prática do App** (3:30 - 5:30) — *Tempo sugerido: 2min 00s*
* **Parte 4: Validação Social e Resultados Estatísticos** (5:30 - 6:30) — *Tempo sugerido: 1min 00s*
* **Parte 5: Reflexões Acadêmicas e Futuro** (6:30 - 7:00) — *Tempo sugerido: 30s*

---

## 🖥️ Roteiro Slide a Slide

### SLIDE 1: Capa e Boas-Vindas
* **Layout do Slide**: Fundo escuro premium (Dark theme), logo do CineGestão em destaque, Nome do Aluno (Pedro Luis Santos Freitas), Matrícula (202402273973), Curso de Ciência da Computação.
* **Cues Visuais**: [Começar com a câmera ligada no canto ou tela cheia, sorrir e manter tom confiante].
* **FALA TRANSCRITA**:
  > *"Olá, meu nome é Pedro Freitas, sou estudante de Ciência da Computação e vou apresentar o CineGestão: uma solução mobile desenvolvida como projeto de extensão universitária para a disciplina de Programação Para Dispositivos Móveis em Android. Nosso projeto teve como principal objetivo aplicar a engenharia de software para transformar a rotina de um negócio local tradicional."*

---

### SLIDE 2: O Diagnóstico Social (O Problema do Parceiro)
* **Layout do Slide**: Divisão em duas colunas. Esquerda: foto real da locadora parceira ou prateleiras de DVDs. Direita: 3 ícones vermelhos destacando as dores (Fichário físico lento, Erros de estoque, Perda financeira).
* **Cues Visuais**: [Apontar para o slide ou usar tom sério para contar a história].
* **FALA TRANSCRITA**:
  > *"Nossa comunidade parceira é a 'Freitas Vídeo Locadora', um comércio tradicional que atende predominantemente um público de baixa renda no Centro do Rio de Janeiro. Durante a fase de escuta ativa com o proprietário, Sr. Pedro, identificamos que a gestão era 100% manual, baseada em fichários de papel e cadernos escolares. O resultado prático disso era um tempo de espera exaustivo para os clientes, desorganização no inventário de títulos disponíveis e falta de rastreio de devoluções atrasadas, ameaçando a saúde financeira do negócio."*

---

### SLIDE 3: A Stack Tecnológica e Engenharia Offline-First
* **Layout do Slide**: Grid de 4 blocos limpos: React Native (Mobile), Node.js/Express (API REST), MongoDB Atlas (Cloud NoSQL) e ícone circular verde (Offline Sync).
* **Cues Visuais**: [Usar tom entusiasmado, dando ênfase à palavra 'Offline-First'].
* **FALA TRANSCRITA**:
  > *"Para resolver essa dor de forma escalável e barata, propusemos o app CineGestão. A stack é composta por React Native no frontend mobile e uma API Node.js conectada ao banco NoSQL MongoDB Atlas na nuvem. A grande engenharia desse projeto é a arquitetura Offline-First: sabendo que conexões centrais de internet oscilam no comércio central, o aplicativo exibe o catálogo localmente usando AsyncStorage e armazena cadastros pendentes em uma fila de sincronização ativa, enviando-os ao banco remoto no momento em que a internet restabelece."*

---

### SLIDE 4: Arquitetura de Software e Diagrama DER
* **Layout do Slide**: Lado esquerdo: Fluxograma de comunicação (App -> API Express -> MongoDB Atlas). Lado direito: Print nítido do Diagrama DER (Entidades Movie, Client e Rental com suas chaves primárias e relacionamentos).
* **Cues Visuais**: [Usar o mouse para apontar a relação de dependência de chaves no DER].
* **FALA TRANSCRITA**:
  > *"Aqui visualizamos a arquitetura de comunicação segura implementada. O frontend mobile efetua chamadas HTTP criptografadas com a biblioteca Axios para a nossa API protegida por middlewares como Helmet e Rate Limiting. Ao lado, temos a modelagem NoSQL do banco de dados Mongoose: estruturamos a coleção 'Rental' referenciando as chaves de Filmes e Clientes por ObjectIDs, garantindo transações de locação rápidas e confiáveis."*

---

### SLIDE 5: O App na Prática (Dashboard e Filtro Rápido)
* **Layout do Slide**: Vídeo gravado da tela do celular rodando o Dashboard Escuro do CineGestão ou print grande da tela inicial do aplicativo.
* **Cues Visuais**: [Mostrar o app rodando de forma fluida].
* **FALA TRANSCRITA**:
  > *"Indo para a prática, este é o Dashboard do CineGestão nas mãos do atendente. Ele exibe instantaneamente o total de filmes cadastrados, clientes ativos e títulos disponíveis. Graças a uma técnica de debounce configurada no campo de busca, o atendente pode pesquisar filmes por nome ou gênero em tempo real diretamente na nossa API sem travar a interface de rolagem (FlatList)."*

---

### SLIDE 6: Demonstração de Cadastro e Fluxo de Locação
* **Layout do Slide**: Lado esquerdo: Print da tela AddMovie com os campos preenchidos. Lado direito: Print da tela RentalFlow com o CPF inserido.
* **Cues Visuais**: [Destacar as validações e as cores verde/vermelho de status].
* **FALA TRANSCRITA**:
  > *"O fluxo operacional é extremamente simples: para cadastrar um novo DVD no sistema, o atendente utiliza o formulário de cadastro com validações de campos vazios e sanitização contra scripts XSS. Para realizar o aluguel, o app exige a inserção de um CPF válido com exatamente 11 dígitos. Ao confirmar, o sistema executa uma chamada PATCH que altera o status do filme de 'Disponível' para 'Alugado', atualizando reativamente o Dashboard."*

---

### SLIDE 7: Validação de Campo e Resultados Estatísticos
* **Layout do Slide**: Gráfico de pizza ou de colunas indicando a satisfação do usuário (forms) e métricas de desempenho (3m45s vs 8s).
* **Cues Visuais**: [Usar tom de vitória para apresentar as métricas de impacto].
* **FALA TRANSCRITA**:
  > *"Validamos a solução com 15 clientes regulares e o Sr. Pedro na locadora física. O resultado foi transformador: mais de 93% dos usuários avaliaram a navegação como altamente intuitiva. Mas o maior indicador de impacto social foi o tempo: o atendimento que durava quase 4 minutos folheando fichas manuais passou a durar apenas 8 segundos com o app, eliminando filas e automatizando cobranças atrasadas."*

---

### SLIDE 8: Reflexão Acadêmica e Considerações Finais
* **Layout do Slide**: Frase-chave de Jakob Nielsen (Usabilidade) ou Roger Pressman (Engenharia de Software) e planos futuros (SQLite Offline-first e Notificações Push).
* **Cues Visuais**: [Olhar para a câmera para finalizar a apresentação].
* **FALA TRANSCRITA**:
  > *"Como reflexão acadêmica, conectamos na prática os preceitos de usabilidade de Jakob Nielsen e o desenvolvimento ágil de Roger Pressman. Para o futuro da aplicação, planejamos adicionar sincronização offline local usando SQLite nativo no celular e notificações push automáticas para lembrar clientes de devoluções. Concluo agradecendo a oportunidade de usar a computação como ponte para o desenvolvimento social de comércios tradicionais. Muito obrigado."*

---

## 💡 Dicas de Sucesso e Postura de Apresentação

1. **Entonação**: Evite ler o texto de forma robotizada. Ensaye a fala usando este roteiro até que ela saia natural, como se estivesse contando uma história real (o que de fato é).
2. **Qualidade do Áudio**: Use fones de ouvido para gravação de áudio limpo, de preferência em local silencioso para evitar eco.
3. **Plano de Slides**: Se o aplicativo rodando emulador apresentar qualquer travamento, não se desespere. Mostre os slides com os prints nítidos das telas que já organizamos.
4. **Link do Vídeo**: Suba no YouTube como **Não Listado** (Unlisted).
