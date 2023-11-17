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
</style>
