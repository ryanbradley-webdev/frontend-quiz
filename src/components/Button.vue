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
  width: 100%;
  height: 56px;
  font-family: inherit;
  font-size: var(--font-size-head-sm);
  font-weight: 500;
  color: var(--clr-white-pri);
  background-color: var(--clr-purple-pri);
  border-radius: 12px;
  border: none;
}
</style>
