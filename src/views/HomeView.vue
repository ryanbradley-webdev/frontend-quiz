<script setup lang="ts">
import LinkItem from '@/components/LinkItem.vue'
import { data } from '../data/data'
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

      <LinkItem v-for="quiz in data" :quiz="quiz" />

    </section>

  </main>
</template>

<style>
h1 {
  font-size: var(--font-size-head-lg);
  font-weight: 300;
}

strong {
  font-weight: 500;
}

em {
  display: block;
  margin-top: 16px;
  color: var(--clr-grey-navy);
  font-size: var(--font-size-body-sm);
  line-height: var(--line-height-body-sm);
}

.quizzes {
  display: grid;
  row-gap: 12px;
  width: 100%;
}
</style>
