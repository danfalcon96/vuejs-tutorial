<script setup>
  import { ref } from 'vue'
  // Single-File Component === React Hooks
  // Composables === Custom Hooks

  // Wrapping ref for Reactivity (useState)
  // Use reactive if using object with bunch of related data
  const product = ref('Socks')
</script>
<template>
  <h1> {{ product }}</h1>
</template>