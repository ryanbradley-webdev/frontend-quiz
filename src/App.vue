<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <Header />

  <RouterView />
</template>

<style>
main {
  display: grid;
  row-gap: 40px;
  padding-inline: 24px;
  padding-block: 32px;
  width: 100%;
}

@media screen and (min-width: 481px) {
  main {
    padding-inline: 64px;
    padding-block: 7px;
    row-gap: 64px;
  }
}

@media screen and (min-width: 769px) and (orientation: landscape) {
  main {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1288px;
    margin-inline: auto;
    padding-block: 0;
  }
}
</style>
