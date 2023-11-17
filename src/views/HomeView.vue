<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Quizzes from '../data/db.json'
</script>

<template>
  <main>
    
    <section>

        <h1>
          Welcome to the
          <br />
          <strong>Frontend Quiz!</strong>
        </h1>

        <em>
          Pick a subject to get started.
        </em>

    </section>

    <section
      class="quizzes"
    >

      <RouterLink to="quiz" v-for="quiz in Quizzes">
        {{ quiz.title }}
      </RouterLink>

    </section>

  </main>
</template>

<style>
h1 {
  font-weight: 300;
}

strong {
  font-weight: 500;
}

.quizzes {
  display: grid;
}
</style>
