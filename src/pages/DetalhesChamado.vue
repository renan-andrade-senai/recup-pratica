<template>
  <div>
    <!--
      TODO (Critério 9): Exiba as informações do chamado e do técnico responsável.

      Mostre os seguintes campos:
        - Título, descrição, status, prioridade, data de criação (do chamado)
        - Nome e especialidade (do técnico)

      Sugestão: use um <div class="card"> do Bootstrap para organizar as informações.

      Dica: use v-if="chamado && tecnico" para renderizar apenas quando os dados
      estiverem carregados. Você pode exibir "Carregando..." enquanto isso com v-else.
    -->

    <!--
      TODO (Critério 10): Adicione um botão "Voltar" que utilize navegação programática.
      Ao clicar, o usuário deve ser redirecionado para /chamados.

      Dica: crie uma função 'voltar()' que chame router.push('/chamados'),
      e use @click="voltar" no botão.
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import type { Chamado } from '../interfaces/Chamado'
import type { Tecnico } from '../interfaces/Tecnico'

const route = useRoute()
const router = useRouter()

// Armazenam os dados carregados da API
const chamado = ref<Chamado | null>(null)
const tecnico = ref<Tecnico | null>(null)

async function buscarChamadoPorId() {
    // TODO (Critério 7): Leia o ID do chamado a partir dos parâmetros da rota.
    // Dica: o parâmetro está em route.params.id

    // TODO (Critério 8): Com o ID em mãos, faça a primeira requisição GET:
    //   http://localhost:3001/chamados/:id
    // Armazene o resultado em 'chamado'.

    // TODO (Critério 8): Com o tecnicoId obtido do chamado, faça a segunda requisição GET:
    //   http://localhost:3001/tecnicos/:tecnicoId
    // Armazene o resultado em 'tecnico'.
}

onMounted(buscarChamadoPorId)

// TODO (Critério 10): Crie a função 'voltar' que usa router.push()
// para redirecionar o usuário para '/chamados'.
function voltar() {

}
</script>