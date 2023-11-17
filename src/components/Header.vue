<script setup lang="ts">
import IconContainer from '@/icons/IconContainer.vue'
import HTMLIcon from '@/icons/HTMLIcon.vue'
import CSSIcon from '@/icons/CSSIcon.vue'
import JSIcon from '@/icons/JSIcon.vue'
import AccessibilityIcon from '@/icons/AccessibilityIcon.vue'
import { useThemeStore } from '@/stores/theme.js'
import { useRoute } from 'vue-router'

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
      v-show="route.params.title"
      class="category"
    >
      
      <IconContainer color="#FFF1E9" :show="route.params.title === 'HTML'">
        <HTMLIcon />
      </IconContainer>

      <IconContainer color="#E0FDEF" :show="route.params.title === 'CSS'">
        <CSSIcon />
      </IconContainer>

      <IconContainer color="#EBF0FF" :show="route.params.title === 'JavaScript'">
        <JSIcon />
      </IconContainer>

      <IconContainer color="#F6E7FF" :show="route.params.title === 'Accessibility'">
        <AccessibilityIcon />
      </IconContainer>

      {{ route.params.title }}

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
