<template>
  <!--
    O componente NavBar já está posicionado aqui.
    Você irá implementá-lo no arquivo src/components/NavBar.vue
  -->
  <NavBar />

  <div class="container mt-4">
    <!-- RouterView renderiza o componente correspondente à rota ativa -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/Navbar.vue'
</script>