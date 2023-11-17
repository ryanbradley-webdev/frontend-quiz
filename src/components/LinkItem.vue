<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Quiz } from '../types/types'
import type { PropType } from 'vue'
import IconContainer from '@/icons/IconContainer.vue'
import HTMLIcon from '@/icons/HTMLIcon.vue'
import CSSIcon from '@/icons/CSSIcon.vue'
import JSIcon from '@/icons/JSIcon.vue'
import AccessibilityIcon from '@/icons/AccessibilityIcon.vue'

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

    <IconContainer color="#FFF1E9" :show="quiz.title === 'HTML'">
      <HTMLIcon />
    </IconContainer>

    <IconContainer color="#E0FDEF" :show="quiz.title === 'CSS'">
      <CSSIcon />
    </IconContainer>

    <IconContainer color="#EBF0FF" :show="quiz.title === 'JavaScript'">
      <JSIcon />
    </IconContainer>

    <IconContainer color="#F6E7FF" :show="quiz.title === 'Accessibility'">
      <AccessibilityIcon />
    </IconContainer>


    {{ quiz.title }}

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
  background-color: var(--clr-white-pri);
  border-radius: 12px;
  text-decoration: none;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
  box-shadow: 0 16px 40px #8fa0c211;
}
</style>
