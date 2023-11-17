<script setup lang="ts">
const {
  currentQuestion,
  totalQuestions
} = defineProps({
  currentQuestion: {
    type: Number,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="progress-bar-container"
  >

    <div
      class="progress-bar"
      :style="{
        width: `${100 * currentQuestion / totalQuestions}%`
      }"
    ></div>

  </div>
</template>

<style scoped>
.progress-bar-container {
  width: 100%;
  height: 16px;
  padding: 4px;
  background-color: var(--clr-white-pri);
  border-radius: 16px;
}

.progress-bar {
  height: 8px;
  background-color: var(--clr-purple-pri);
  border-radius: 8px;
}
</style>
