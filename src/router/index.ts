import { createRouter, createWebHistory } from 'vue-router'

// TODO (Critério 1): Importe os três componentes de página abaixo.
// import ListaChamados from '../pages/ListaChamados.vue'
// import DetalhesChamado from '../pages/DetalhesChamado.vue'
// import NovoChamado from '../pages/NovoChamado.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // TODO (Critério 1): Defina as rotas do sistema aqui.
    // O sistema deve ter as seguintes rotas:
    //
    // '/'               → redireciona automaticamente para '/chamados'
    // '/chamados'       → exibe o componente ListaChamados
    // '/chamados/novo'  → exibe o componente NovoChamado
    // '/chamados/:id'   → exibe o componente DetalhesChamado (rota dinâmica)
    //
    // ⚠️ Atenção: defina '/chamados/novo' ANTES de '/chamados/:id'.
    // Isso garante que o Vue Router não confunda o texto "novo" com um ID.
  ],
})

export default router