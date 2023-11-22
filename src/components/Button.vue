<script setup lang="ts">
</script>

<template>
  <button
    @click="$emit('btn-click')"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
  --border-radius: 12px;
  position: relative;
  width: 100%;
  height: 56px;
  font-family: inherit;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
  color: var(--clr-white-pri);
  background-color: var(--clr-purple-pri);
  border-radius: var(--border-radius);
  border: none;
}

button:is(:hover, :focus)::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: var(--clr-white-pri);
  border-radius: var(--border-radius);
  opacity: 0.5;
}

@media screen and (min-width: 580px) {
  button {
    --border-radius: 24px;
    height: 92px;
    border-radius: 24px;
  }
}
</style>
