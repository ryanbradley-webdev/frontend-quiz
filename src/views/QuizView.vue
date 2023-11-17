<script setup lang="ts">
import type { Quiz } from '@/types/types';
import type { PropType } from 'vue';

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
  <div class="quiz">
    <h1>{{ quiz.title }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .quiz {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
