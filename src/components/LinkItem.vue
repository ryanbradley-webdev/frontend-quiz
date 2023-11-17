<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type Quiz } from '../types/types'
import type { PropType } from 'vue'

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
  <RouterLink :to="`quiz/${quiz.title}`">
    {{ quiz.title }}
  </RouterLink>
</template>

<style scoped>

</style>
