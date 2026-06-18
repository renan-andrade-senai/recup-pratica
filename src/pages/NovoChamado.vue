<template>
  <div>
    <h2 class="mb-4">Abrir Novo Chamado</h2>

    <!--
      TODO (Critério 13): Exiba uma mensagem de sucesso após o envio do formulário.
      Use v-if="enviado" para mostrar a mensagem condicionalmente.
      Sugestão: <div class="alert alert-success"> ... </div>
    -->

    <!--
      TODO (Critério 11): Monte o formulário com os campos abaixo, estilizados com Bootstrap.
      Use v-model para vincular cada campo à sua variável correspondente.

      Campos necessários:
        - titulo     → input type="text"
        - descricao  → textarea
        - prioridade → select com as opções: Alta, Média, Baixa
        - tecnicoId  → select com as opções carregadas da API (use v-for nos tecnicos)

      Use @submit.prevent="enviarChamado" no elemento <form>.

      Estrutura sugerida para cada campo Bootstrap:
      <div class="mb-3">
        <label class="form-label">...</label>
        <input class="form-control" ... />
      </div>
    -->

    <!--
      TODO (Critério 10): Adicione um botão de envio ao formulário.
      Sugestão: <button type="submit" class="btn btn-primary">Abrir Chamado</button>
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import type { Tecnico } from '../interfaces/Tecnico'

const router = useRouter()

// Campos do formulário — use v-model para vinculá-los aos inputs do template
const titulo = ref<string>('')
const descricao = ref<string>('')
const prioridade = ref<string>('Alta')
const tecnicoId = ref<number | null>(null)

// Controla se o formulário já foi enviado com sucesso
const enviado = ref<boolean>(false)

// Lista de técnicos carregada da API para preencher o select
const tecnicos = ref<Tecnico[]>([])

async function buscarTecnicos() {
    // TODO (Critério 2): Busque a lista de técnicos via Axios (GET):
    //   http://localhost:3001/tecnicos
    // Armazene o resultado em 'tecnicos' para preencher o select do formulário.
}

onMounted(buscarTecnicos)

async function enviarChamado() {
  // TODO (Critério 12): Monte o objeto do novo chamado e envie via POST com Axios.
  //
  // O objeto deve conter:
  //   - titulo, descricao, prioridade e tecnicoId (vindos dos refs do formulário)
  //   - status: 'Aberto'  (fixo — não precisa de campo no formulário)
  //   - dataCriacao: data atual no formato YYYY-MM-DD
  //     Dica: new Date().toISOString().split('T')[0]
  //
  // Endpoint para o POST:
  //   http://localhost:3001/chamados
  //
  // TODO (Critério 13): Após o envio bem-sucedido:
  //   - Defina 'enviado' como true para exibir a mensagem de sucesso, E/OU
  //   - Redirecione o usuário para '/chamados' usando router.push()
  //     (aguarde alguns segundos antes de redirecionar, se exibir a mensagem)
}
</script>