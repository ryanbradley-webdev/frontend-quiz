<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      Theme selector
    </div>
  </header>

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
