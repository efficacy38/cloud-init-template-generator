<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
</script>

<template>
  <div class="vh-100 d-flex flex-column">
    <Nav />
    <div class="bg-light flex-1">
      <RouterView />
    </div>
  </div>
</template>

<style>
.body {
  display: grid;
}

.flex-1 {
  flex: 1;
}
</style>

