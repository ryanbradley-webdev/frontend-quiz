<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.js'

const themeStore = useThemeStore()


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

  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 24px;
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
</style>
