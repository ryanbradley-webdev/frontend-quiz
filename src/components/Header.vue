<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()


</script>

<template>
  <header>



    <label for="theme">

      <img :src="`/icon-sun-${themeStore.theme}.svg`" alt="sun" />

      <input type="checkbox" :checked="themeStore.theme === 'dark'" v-on:change="themeStore.toggleTheme" />

      <img :src="`/icon-moon-${themeStore.theme}.svg`" alt="moon" />

    </label>

  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding-block: 16px;
  padding-inline: 24px;
}
</style>
