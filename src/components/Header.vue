<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.js'
import { useRoute } from 'vue-router'
import QuizLabel from './QuizLabel.vue'

const themeStore = useThemeStore()
const route = useRoute()
</script>

<template>
  <header>

    <label for="theme">

      <img
        :src="`/icon-sun-${themeStore.theme}.svg`"
        alt="sun"
      />

      <div
        class="input-container"
      >

        <input
          type="checkbox"
          :checked="themeStore.theme === 'dark'"
          v-on:change="themeStore.toggleTheme"
        />

        <div
          class="input-toggle"
          :style="{
            left: themeStore.theme === 'light' ? '4px' : '16px'
          }"
        ></div>

      </div>


      <img
        :src="`/icon-moon-${themeStore.theme}.svg`"
        alt="moon"
      />

    </label>

    <div
      v-if="route.params.title"
      class="category"
    >
      
      <QuizLabel
        :title="(route.params.title as string)"
      />

    </div>

  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
}

@media screen and (min-width: 580px) {
  header {
    padding-inline: 64px;
    padding-block: 56px;
  }
}

@media screen and (min-width: 1168px) and (orientation: landscape) {
  header {
    max-width: 1288px;
    padding-block: 99px;
    margin-inline: auto;
  }
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-container {
  position: relative;
  display: flex;
}

.input-toggle {
  position: absolute;
  top: 4px;
  pointer-events: none;
  width: 12px;
  height: 12px;
  background-color: var(--clr-white-pri);
  border-radius: 100%;
  transition: left 0.15s ease;
}

input {
  appearance: none;
  width: 32px;
  height: 20px;
  border-radius: 20px;
  background-color: var(--clr-purple-pri);
}

.category {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
}
</style>
