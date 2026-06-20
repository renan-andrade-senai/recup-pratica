# Avaliação Prática — Sistema de Controle de Chamados Técnicos

## Contexto

A empresa **TechSupport Soluções** presta serviços de assistência técnica de informática
para pequenas e médias empresas. Hoje, o controle dos chamados de suporte é feito
manualmente, por planilhas e anotações, o que gera atrasos e dificulta o acompanhamento
dos atendimentos.

Para modernizar esse processo, a empresa contratou o desenvolvimento de um painel web
que permita visualizar e gerenciar os chamados técnicos de forma prática e organizada.

**Sua tarefa é desenvolver esse painel utilizando Vue.js 3 com TypeScript e Composition API.**

---

## O que será desenvolvido

Um sistema web com três telas principais:

1. **Lista de Chamados** — exibe todos os chamados cadastrados, com informações básicas
   como título, status e prioridade
2. **Detalhes do Chamado** — exibe as informações completas de um chamado específico,
   incluindo o nome e a especialidade do técnico responsável
3. **Novo Chamado** — formulário para registrar um novo chamado no sistema

---

## Entidades do Domínio

### Técnico (`Tecnico`)

| Atributo      | Tipo   | Descrição                                      |
|---------------|--------|------------------------------------------------|
| id            | number | Identificador único                            |
| nome          | string | Nome completo do técnico                       |
| especialidade | string | Área de atuação (Hardware, Software, Redes...) |

### Chamado (`Chamado`)

| Atributo    | Tipo   | Descrição                                              |
|-------------|--------|--------------------------------------------------------|
| id          | number | Identificador único                                    |
| titulo      | string | Título resumido do problema                            |
| descricao   | string | Descrição detalhada do problema relatado               |
| status      | string | Status atual: "Aberto", "Em andamento" ou "Concluído"  |
| prioridade  | string | Nível de urgência: "Alta", "Média" ou "Baixa"          |
| dataCriacao | string | Data de abertura do chamado (formato: YYYY-MM-DD)      |
| tecnicoId   | number | ID do técnico responsável pelo atendimento             |

---

## Requisitos Funcionais

### RF01 — Configuração do projeto
- Configurar o **Vue Router** com as rotas necessárias para o sistema
- Integrar o **Bootstrap** ao projeto para estilização das telas
- Integrar o **Axios** para realizar as requisições HTTP ao json-server

### RF02 — Componente de navegação
- Criar um menu de navegação fixo no topo da página com links para:
  - Lista de Chamados (`/chamados`)
  - Novo Chamado (`/chamados/novo`)
- Utilizar `<RouterLink>` do Vue Router nos links do menu

### RF03 — Lista de Chamados (`/chamados`)
- Ao carregar a página, buscar todos os chamados via Axios (GET) no endpoint:
  `http://localhost:3001/chamados`
- Exibir os chamados em uma lista ou tabela com: **título, status, prioridade e data de criação**
- Cada chamado deve ter um botão ou link para acessar sua tela de detalhes

### RF04 — Detalhes do Chamado (`/chamados/:id`)
- Ler o ID do chamado a partir do parâmetro da URL
- Buscar o chamado pelo ID via Axios (GET):
  `http://localhost:3001/chamados/:id`
- Buscar o técnico responsável via Axios (GET):
  `http://localhost:3001/tecnicos/:tecnicoId`
- Exibir todas as informações do chamado e o **nome e especialidade** do técnico
- Ter um botão **"Voltar"** que retorna à lista utilizando navegação programática
  (`useRouter` + `router.push()`)

### RF05 — Novo Chamado (`/chamados/novo`)
- Criar um formulário com os seguintes campos:
  - **Título** — campo de texto
  - **Descrição** — área de texto (textarea)
  - **Prioridade** — seleção com as opções: Alta, Média, Baixa
  - **Técnico responsável** — seleção com opções carregadas do json-server
- O campo **status** deve ser preenchido automaticamente como `"Aberto"` e a
  **dataCriacao** como a data atual (não devem aparecer no formulário)
- Ao enviar o formulário, realizar um POST via Axios para:
  `http://localhost:3001/chamados`
- Após o envio bem-sucedido, **exibir uma mensagem de sucesso** e/ou
  **redirecionar o usuário** para a lista de chamados

---

## Tecnologias utilizadas

| Tecnologia   | Finalidade                              |
|--------------|-----------------------------------------|
| Vue.js 3     | Framework principal (Composition API)   |
| TypeScript   | Tipagem estática                        |
| Vue Router 4 | Navegação entre páginas                 |
| Axios        | Requisições HTTP                        |
| Bootstrap 5  | Estilização e layout responsivo         |
| Vite         | Ferramenta de build e desenvolvimento   |
| json-server  | Simulação de API REST (mock)            |

---

## Critérios de Avaliação

| #  | Critério                                                                 | Pontuação |
|----|--------------------------------------------------------------------------|-----------|
| 1  | **Configuração do Vue Router** — rotas definidas corretamente,           | 0,5 pt    |
|    | incluindo a rota dinâmica `/chamados/:id`                                |           |
| 2  | **Configuração do Axios** — uso correto do Axios nas requisições         | 0,5 pt    |
| 3  | **Configuração do Bootstrap** — biblioteca integrada e utilizada         | 0,5 pt    |
| 4  | **Componente de navegação** — menu com `<RouterLink>` funcional          | 0,5 pt    |
| 5  | **Listagem — requisição** — dados carregados via Axios no `onMounted`    | 1,0 pt    |
| 6  | **Listagem — exibição** — chamados exibidos corretamente com Bootstrap   | 0,5 pt    |
| 7  | **Rota dinâmica — parâmetro** — ID lido corretamente via `useRoute`      | 0,5 pt    |
| 8  | **Detalhe — requisição** — chamado e técnico carregados via Axios        | 1,0 pt    |
| 9  | **Detalhe — exibição** — informações organizadas e completas             | 0,5 pt    |
| 10 | **Navegação programática** — uso correto de `useRouter` e `router.push` | 1,5 pt    |
| 11 | **Formulário — estrutura** — campos corretos e estilizados com Bootstrap | 0,5 pt    |
| 12 | **Formulário — POST** — dados enviados corretamente ao json-server       | 1,0 pt    |
| 13 | **Feedback pós-envio** — mensagem de sucesso ou redirecionamento         | 0,5 pt    |
| 14 | **Interfaces TypeScript** — entidades tipadas com `interface`,           | 1,0 pt    |
|    | variáveis e refs corretamente tipadas                                    |           |
|    | **Total**                                                                | **10 pts**|

---

## Como executar o projeto

### 1. Instalar as dependências
```bash
npm install
```

### 2. Iniciar o json-server (API mock)
Abra um terminal e execute:
```bash
npm run server
```
A API ficará disponível em: `http://localhost:3001`

### 3. Iniciar o servidor de desenvolvimento Vue
Em outro terminal, execute:
```bash
npm run dev
```
A aplicação ficará disponível em: `http://localhost:5173`

> ⚠️ Os dois servidores precisam estar rodando ao mesmo tempo para a aplicação funcionar.

---

## Instruções de Entrega

### Criando o repositório

1. Acesse [github.com](https://github.com) e crie um repositório **público** com o nome:
   `avaliacao-chamados-seunome` (ex.: `avaliacao-chamados-joao-silva`)
2. Clone o repositório na sua máquina
3. Copie os arquivos do projeto base para dentro da pasta clonada
4. Faça commits ao longo do desenvolvimento e envie com `git push`

### O que deve constar no README do seu repositório

No arquivo `README.md` do seu repositório, inclua:
- Seu **nome completo** e **turma**
- Como instalar e executar o projeto (os mesmos passos da seção acima)

### Observações importantes

- Esta é uma avaliação **individual**. Não é permitido compartilhar código ou
  consultar o trabalho de colegas durante a prova.
- Você pode consultar a **documentação oficial** do Vue.js, Vue Router, Axios e Bootstrap.
- Certifique-se de que a pasta `node_modules` **não está incluída** no repositório
  (o `.gitignore` já está configurado corretamente).
- Teste o projeto antes do push final — ele deve estar **executando sem erros**.

# Imagens

![lista chamados]("lista chamados.png")
![detalhes chamado]("detalhes chamado.png")
![novo chamado]("novo chamado.png")
