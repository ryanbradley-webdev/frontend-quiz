<script setup lang="ts">
import type { Quiz } from '@/types/types'
import { computed } from '@vue/reactivity'
import { ref, type PropType } from 'vue'
import Button from '@/components/Button.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import QuizLabel from '@/components/QuizLabel.vue'
import CheckIcon from '@/icons/CheckIcon.vue'
import XIcon from '@/icons/XIcon.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

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
const selectedOption = ref('')
const questionIsAnswered = ref(false)
const questionIsCorrect = ref<boolean | null>(null)
const correctAnswers = ref(0)
const quizIsComplete = ref(false)
const error = ref(false)

const handleChange = (option: string) => {
  if (error.value) {
    error.value = false
  }
  selectedOption.value = option
}

const submitAnswer = () => {
  if (!selectedOption.value) {
    return error.value = true
  }

  questionIsAnswered.value = true
  questionIsCorrect.value = selectedOption.value === currentQuestion.value.answer

  if (questionIsCorrect.value) {
    correctAnswers.value++
  }
}

const nextQuestion = () => {
  if (!selectedOption.value) {
    return
  }

  questionIsAnswered.value = false
  selectedOption.value = ''

  if (questionNumber.value < 9) {
    questionNumber.value++
  } else {
    questionNumber.value = 0
  }
}

const seeResults = () => {
  quizIsComplete.value = true
}

const restartQuiz = () => {
  quizIsComplete.value = false
  questionNumber.value = 0
  correctAnswers.value = 0
  questionIsCorrect.value = false
  questionIsAnswered.value = false
  selectedOption.value = ''
}
</script>

<template>

  <main
    v-if="quizIsComplete"
    :data-theme="themeStore.theme"
  >

    <section>
      <h1>
        Quiz completed
        <br />
        <strong>
          You scored...
        </strong>
      </h1>
    </section>

    <section>
      <div
        class="quiz-label-container"
      >

        <div
          class="quiz-label"
        >
          <QuizLabel
            :title="quiz.title"
          />
        </div>

        <h2>
          {{ correctAnswers }}
        </h2>
        
        <span>
          out of {{ quiz.questions.length }}
        </span>

      </div>

      <Button
        @btn-click="restartQuiz"
      >
        Play Again
      </Button>
    </section>

  </main>

  <main
    v-else
    :data-theme="themeStore.theme"
  >

    <section
      class="question-container"
    >

      <div
        class="question"
      >
  
        <em>
          Question {{ questionNumber + 1 }} of {{ quiz.questions.length }}
        </em>
  
        <h3>
          {{ currentQuestion.question }}
        </h3>
        
      </div>

      <ProgressBar
        :currentQuestion="questionNumber + 1"
        :totalQuestions="quiz.questions.length"
      />

    </section>

    <section
      class="options"
    >

      <label
        class="option-container"
        v-for="option in currentQuestion.options"
        :data-incorrect-answer="questionIsAnswered && selectedOption === option && currentQuestion.answer !== option"
        :data-correct-answer="questionIsAnswered && option === currentQuestion.answer"
        :key="option"
        :aria-disabled="questionIsAnswered"
      >
        <span>{{ option }}</span>
        <input
          type="radio"
          name="options"
          :id="option"
          :value="option"
          @change="() => handleChange(option)"
        >

        <div
          v-show="questionIsAnswered && option === currentQuestion.answer"
          class="answer-option"
        >
          <CheckIcon />
        </div>

        <div
          v-show="questionIsAnswered && selectedOption === option && currentQuestion.answer !== option"
          class="answer-option"
        >
          <XIcon />
        </div>
      </label>

      <Button
        @btn-click="() => {
          if (questionIsAnswered) {
            if (questionNumber === quiz.questions.length - 1) {
              seeResults()
            } else {
              nextQuestion()
            }
          } else {
            submitAnswer()
          }
        }"
      >
        {{ questionIsAnswered ? questionNumber === quiz.questions.length - 1 ? 'See Results' :  'Next Question' : 'Submit Answer' }}
      </Button>

      <div
        v-show="error"
        class="error"
      >
        <XIcon />

        Please select an answer
      </div>

    </section>

  </main>

</template>

<style scoped>
main {
  column-gap: 100px;
}

.quiz-label-container {
  padding: 32px;
  margin-bottom: 12px;
  background-color: var(--bg-color-pri);
  border-radius: 12px;
  text-align: center;
}

@media screen and (min-width: 580px) {
  .quiz-label-container {
    margin-bottom: 32px;
  }
}

h2 {
  display: block;
  margin-block: 16px;
  color: var(--text-color-pri);
  font-size: var(--font-size-display);
  font-weight: 500;
}

h3 {
  font-size: var(--font-size-head-md);
  line-height: var(--line-height-head-md);
}

.quiz-label-container span {
  font-size: 18px;
  color: var(--text-color-sec);
}

.quiz-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  color: inherit;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
}

.question-container {
  display: grid;
  row-gap: 24px;
}

.question {
  display: grid;
  row-gap: 12px;
}

@media screen and (min-width: 580px) {
  .question-container {
    row-gap: 40px;
  }

  .question {
    row-gap: 27px;
  }
}

@media screen and (min-width: 1168px) and (orientation: landscape) {
  .question-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 92px;
  }
}

.options {
  display: grid;
  row-gap: 12px;
}

@media screen and (min-width: 580px) {
  .options {
    row-gap: 24px;
  }

  .options > button {
    margin-top: 12px;
  }
}

.option-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  width: 100%;
  height: 64px;
  background-color: var(--bg-color-pri);
  border-radius: 12px;
  text-decoration: none;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
  box-shadow: 0 16px 40px #8fa0c211;
}

.option-container input {
  display: none;
}

.answer-option {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background: radial-gradient(var(--bg-color-pri) 40%, transparent);
}

.option-container::before {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  color: var(--clr-grey-navy);
  font-size: var(--font-size-head-sm);
  background-color: var(--clr-light-grey);
  border-radius: 6px;
}

.option-container[aria-disabled="false"]:is(:hover, :focus)::before {
  color: var(--clr-purple-pri);
  background-color: #F6E7FF;
}

@media screen and (min-width: 580px) {
  .option-container {
    height: auto;
    min-height: 80px;
  }

  .option-container::before {
    height: 56px;
    width: 56px;
    border-radius: 12px;
  }
}

@media screen and (min-width: 1168px) {
  .option-container {
    height: 92px;
  }
}

.option-container:first-child::before {
  content: 'A';
}

.option-container:nth-child(2)::before {
  content: 'B';
}

.option-container:nth-child(3)::before {
  content: 'C';
}

.option-container:nth-child(4)::before {
  content: 'D';
}

.option-container:has(input:checked)::after,
.options:not(:has(.option-container[data-incorrect-answer="true"])) .option-container[data-correct-answer="true"]::after,
.option-container[data-incorrect-answer="true"]::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 3px solid var(--clr-purple-pri);
  border-radius: 12px;
}

.option-container:has(input:checked)::before {
  color: var(--clr-white-pri);
  background-color: var(--clr-purple-pri);
}

.options:not(:has(.option-container[data-incorrect-answer="true"])) .option-container[data-correct-answer="true"]::after {
  border-color: var(--clr-green-pri);
}

.options:not(:has(.option-container[data-incorrect-answer="true"])) .option-container[data-correct-answer="true"]::before {
  color: var(--clr-white-pri);
  background-color: var(--clr-green-pri);
}

.option-container[data-incorrect-answer="true"]:has(input:checked)::after {
  border-color: var(--clr-red-pri);
}

.option-container[data-incorrect-answer="true"]:has(input:checked)::before {
  background-color: var(--clr-red-pri);
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--clr-red-pri);
  font-size: var(--font-size-body-md);
}
</style>
