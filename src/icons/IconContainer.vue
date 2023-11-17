<script setup lang="ts">
const {
  show
} = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    v-show="show"
    :style="{ backgroundColor: color }"
  >
    <slot />
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-items: center;
  height: 56px;
  width: 56px;
  border-radius: 12px;
}
</style>
