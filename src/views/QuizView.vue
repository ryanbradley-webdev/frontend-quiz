<script setup lang="ts">
import type { Quiz } from '@/types/types'
import { computed } from '@vue/reactivity'
import { ref, type PropType } from 'vue'
import Button from '@/components/Button.vue'
import ProgressBar from '@/components/ProgressBar.vue'

const {
  quiz
} = defineProps({
  quiz: {
    type: Object as PropType<Quiz>,
    required: true
  }
})

const questionNumber = ref(0)
const currentQuestion = computed(() => quiz.questions[questionNumber.value])

const nextQuestion = () => {
  if (questionNumber.value < 9) {
    questionNumber.value++
  } else {
    questionNumber.value = 0
  }
}
</script>

<template>

  <main>

    <section>

      <em>
        Question {{ questionNumber + 1 }} of {{ quiz.questions.length }}
      </em>

      <h3>
        {{ currentQuestion.question }}
      </h3>

      <ProgressBar
        :currentQuestion="questionNumber + 1"
        :totalQuestions="quiz.questions.length"
      />

    </section>

    <section>

      <div v-for="option in currentQuestion.options">
        {{ option }}
      </div>

      <Button
        @btn-click="nextQuestion"
      >
        Next Question
      </Button>

    </section>

  </main>

</template>

<style scoped>

</style>
