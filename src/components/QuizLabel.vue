<script setup lang="ts">
import IconContainer from '@/icons/IconContainer.vue'
import HTMLIcon from '@/icons/HTMLIcon.vue'
import CSSIcon from '@/icons/CSSIcon.vue'
import JSIcon from '@/icons/JSIcon.vue'
import AccessibilityIcon from '@/icons/AccessibilityIcon.vue'

const { title } = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <IconContainer color="#FFF1E9" :show="title === 'HTML'">
    <HTMLIcon />
  </IconContainer>

  <IconContainer color="#E0FDEF" :show="title === 'CSS'">
    <CSSIcon />
  </IconContainer>

  <IconContainer color="#EBF0FF" :show="title === 'JavaScript'">
    <JSIcon />
  </IconContainer>

  <IconContainer color="#F6E7FF" :show="title === 'Accessibility'">
    <AccessibilityIcon />
  </IconContainer>


  {{ title }}
</template>
