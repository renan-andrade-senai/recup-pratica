<template>
  <div>
    <h2 class="mb-4">Chamados Técnicos</h2>

    <!--
      TODO (Critério 6): Exiba os chamados utilizando Bootstrap.

      Para cada chamado da lista, mostre:
        - Título
        - Status
        - Prioridade
        - Data de criação
        - Um botão ou link para acessar os detalhes do chamado

      Sugestão: use uma tabela (<table class="table">) ou cartões (<div class="card">).
      Use v-for para percorrer a lista de chamados.
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { Chamado } from '../interfaces/Chamado'

// Lista de chamados que será preenchida após a requisição
const chamados = ref<Chamado[]>([])

// TODO (Critério 5): Faça uma requisição GET com Axios para buscar
  // todos os chamados do seguinte endpoint:
  //   http://localhost:3001/chamados
  //
  // Armazene o resultado na variável 'chamados'.
  // Lembre-se: o dado retornado está na propriedade .data da resposta do Axios.
async function buscarChamados() {
    
}

onMounted(buscarChamados())
</script>