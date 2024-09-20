<script setup>
  import { ref } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'

  // Single-File Component === React Hooks
  // Composables === Custom Hooks

  // Wrapping ref for Reactivity (useState)
  // Use reactive if using object with bunch of related data
  const product = ref('Socks')
</script>
<template>
  <div class="nav-bar"></div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- v-bind = binding data to the variable -->

        <img v-bind:src="socksGreenImage">
      </div>
      <div class="product-info">
        <!-- Equivalent of {} in React -->
        <h1> {{ product }}</h1>
      </div>
    </div>
  </div>
</template>