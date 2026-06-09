# ROTEIRO DE APRESENTAÇÃO - PROJETO DE EXTENSÃO CINEGESTÃO

**Tempo Limite**: 7 Minutos (Estrito)  
**Objetivo**: Demonstrar o impacto social, a arquitetura técnica e o funcionamento prático do aplicativo CineGestão.

---

## Estrutura dos Slides e Cronometragem

```mermaid
gantt
    title Cronograma de Apresentação (7 Minutos)
    dateFormat  m:s
    axisFormat %M:%S
    section Apresentação
    1. Introdução e Diagnóstico (1:30) :active, 0:00, 1:30
    2. Solução e Arquitetura Técnica (2:00) : 1:30, 3:30
    3. Demonstração Prática / Telas (2:00) : 3:30, 5:30
    4. Validação e Feedback Social (1:00) : 5:30, 6:30
    5. Conclusão e Aprendizados (0:30) : 6:30, 7:00
```

---

### PARTE 1: Introdução e Diagnóstico (00:00 a 01:30)
**Foco**: Contexto humano e o parceiro local.  
* **Slide 1**: Capa da Apresentação
  * *Conteúdo Visual*: Logo do CineGestão, Nome do estudante (Pedro Luis Santos Freitas), Matrícula (202402273973), logo da Estácio.
  * *FALA PROPOSTA*: *"Olá, sou o Pedro Freitas, aluno de Ciência da Computação. Vou apresentar o CineGestão, um projeto desenvolvido como extensão universitária para a disciplina de Programação Móvel Android, em benefício de um pequeno comércio tradicional do Rio de Janeiro: a Freitas Vídeo Locadora."*
* **Slide 2**: O Parceiro e a Dor Social (Diagnóstico)
  * *Conteúdo Visual*: Fotos da locadora física (fachada/prateleiras de DVDs) e ícones ilustrativos (caderno de anotações com caneta, relógio de areia, ponto de interrogação).
  * *FALA PROPOSTA*: *"A Freitas Vídeo Locadora fica no Centro do Rio de Janeiro e ainda operava com registros totalmente manuais. O proprietário, Sr. Pedro, dependia de fichários de papel para gerenciar mais de mil filmes e cadastrar clientes. Isso gerava três grandes problemas: o tempo excessivo para buscar a ficha de um cliente na hora de alugar, a frequente desorganização onde um filme constava como livre mas estava alugado, e a perda financeira por falta de controle de devoluções em atraso."*

---

### PARTE 2: A Solução e Arquitetura Técnica (01:30 a 03:30)
**Foco**: Engenharia de Software e Stack Tecnológica.  
* **Slide 3**: Proposta de Valor, Stack e Estratégia Offline
  * *Conteúdo Visual*: Logotipos das tecnologias (React Native, Node.js, MongoDB Atlas) e ícones de sincronização (nuvem + seta circular) e segurança (cadeado).
  * *FALA PROPOSTA*: *"Desenvolvemos o CineGestão em React Native e backend Express com MongoDB. Como diferencial para o negócio, estruturamos uma arquitetura Offline-First: em caso de oscilações na rede central, o aplicativo exibe o catálogo cacheado localmente no dispositivo via AsyncStorage e armazena cadastros pendentes em uma fila de sincronização, enviando-os ao MongoDB na nuvem automaticamente no momento em que a internet é restaurada. Além disso, implementamos controles de segurança robustos como Helmet e Rate Limiting no servidor backend."*
* **Slide 4**: Arquitetura do Sistema e Modelo DER
  * *Conteúdo Visual*: Diagrama de Arquitetura ligando o app mobile à API e ao MongoDB Atlas, ao lado do Diagrama de Entidades-Relacionamentos (DER) representando as coleções Movie, Client e Rental.
  * *FALA PROPOSTA*: *"Este diagrama de arquitetura ilustra a comunicação cliente-servidor através de requisições HTTPS JSON via Axios. Paralelamente, exibimos o Diagrama de Entidades-Relacionamentos do banco de dados MongoDB: estruturamos coleções limpas para Filmes, Clientes e Aluguéis, onde a coleção Rental faz referências indexadas por ObjectID, garantindo a integridade operacional necessária para a auditoria dos dados de locação."*

---

### PARTE 3: Demonstração Prática e Evidências (03:30 a 05:30)
**Foco**: Mostrar o código rodando e as funcionalidades cruciais.  
* **Slide 5**: Dashboard e Busca em Tempo Real (Demonstração)
  * *Conteúdo Visual*: Vídeo curto ou print de alta resolução do Dashboard do aplicativo rodando no celular física com temas escuros.
  * *FALA PROPOSTA*: *"Agora, na prática: esta é a tela inicial do CineGestão operada pelo funcionário. No topo, temos os indicadores dinâmicos do acervo. A busca utiliza um recurso de 'debounce' para filtrar o acervo automaticamente na API à medida que o atendente digita, diminuindo o tráfego de rede e dando respostas instantâneas."*
* **Slide 6**: Fluxo de Cadastro e Aluguel Seguros
  * *Conteúdo Visual*: Prints da tela de Cadastro de Filme e da tela de Aluguel com preenchimento de CPF e Data de Devolução.
  * *FALA PROPOSTA*: *"Ao receber um novo título físico na loja, o atendente abre a tela de cadastro e envia os dados diretamente ao banco. No fluxo de aluguel, o app captura o filme selecionado, exige a validação do CPF do cliente e atualiza o status de disponibilidade do acervo para 'Alugado' imediatamente de forma reativa. O sistema valida que o CPF inserido deve ter exatamente 11 dígitos, evitando erros no cadastro."*

---

### PARTE 4: Resultados da Extensão e Feedback (05:30 a 06:30)
**Foco**: O impacto social validado por dados de reação.  
* **Slide 7**: Avaliação de Reação do Parceiro
  * *Conteúdo Visual*: Gráfico estatístico do Google Forms (ex: 93,3% de navegação intuitiva) e foto do grupo testando o app no celular do proprietário.
  * *FALA PROPOSTA*: *"Para validar a extensão, coletamos a opinião de 15 clientes frequentes e do proprietário por meio do Google Forms. O feedback foi extremamente positivo: mais de 93% dos usuários destacaram a facilidade da navegação. Mas o maior ganho foi na eficiência: o tempo para atendimento e registro de um aluguel diminuiu de quase 4 minutos para menos de 10 segundos. O Sr. Pedro destacou que o aplicativo eliminou o estresse de procurar fichas físicas sob iluminação fraca."*

---

### PARTE 5: Conclusão e Aprendizados (06:30 a 07:00)
**Foco**: Lição humana, técnica e trabalhos futuros.  
* **Slide 8**: Considerações Finais
  * *Conteúdo Visual*: Marcadores com: "Impacto Técnico-Social", "Princípios de Usabilidade na Prática", "Próximo Passo: Modo Offline-First".
  * *FALA PROPOSTA*: *"Este projeto demonstrou que a engenharia de software aplicada resolve problemas reais da comunidade. Como aprendizado técnico, conectamos as heurísticas de Jakob Nielsen à prática do design para dispositivos móveis. Para o futuro, planejamos integrar o banco local SQLite permitindo funcionamento 100% offline em quedas de internet. Muito obrigado pela atenção."*

---

## Dicas Importantes para Gravação do Vídeo (7 Minutos)

1. **Grave a tela do celular antecipadamente**: Se for fazer gravação com o celular na mão, faça em uma área bem iluminada ou use gravador de tela do Android (ex: AZ Recorder) para colocar o vídeo de alta qualidade dentro do slide de demonstração. Isso elimina o risco do app travar ou a internet falhar durante a gravação da apresentação.
2. **Postura e Tom**: Fale de forma clara, pausada, e em tom profissional. Use fone de ouvido com microfone perto da boca para evitar ecos ou ruídos domésticos.
3. **Cronômetro ao lado**: Mantenha um celular com cronômetro visível para controlar rigorosamente cada transição de slide e não estourar os 7 minutos de regulamento.
4. **Formato**: Salve os slides como PDF ou use ferramentas como Canva / PowerPoint com gravação interna de áudio/vídeo da webcam no canto inferior da tela.
