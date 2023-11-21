<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Quiz } from '../types/types'
import type { PropType } from 'vue'
import QuizLabel from './QuizLabel.vue'

const {
  quiz
} = defineProps({
  quiz: {
    type: Object as PropType<Quiz>,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="{
      name: 'quiz',
      params: {
        title: quiz.title
      }    
    }"
    class="link-container"
  >

    <QuizLabel
      :title="quiz.title"
    />

  </RouterLink>
</template>

<style scoped>
.link-container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  width: 100%;
  color: inherit;
  background-color: var(--bg-color-pri);
  border-radius: 12px;
  text-decoration: none;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
  box-shadow: 0 16px 40px #8fa0c211;
}
</style>
