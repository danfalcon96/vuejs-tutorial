<script setup>
  import { ref } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'

  // Single-File Component === React Hooks
  // Composables === Custom Hooks

  // Wrapping ref for Reactivity (useState)
  // Use reactive if using object with bunch of related data
  const product = ref('Socks')
  const image = ref(socksGreenImage)
  const inStock = ref(true)

  const details = ref(['50% cotton', '50% wool', '20% polyester'])

  const variants = ref([
    { id: 2234, color: 'green' },
    { id: 2235, color: 'blue' }
  ])
</script>
<template>
  <div class="nav-bar"></div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- v-bind = binding data to the script variable -->
        <img :src="image">
      </div>
      <div class="product-info">
        <!-- Equivalent of {} in React -->
        <h1> {{ product }}</h1>
        <!-- Can use v-show = Still rendered. display: none. More performant -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
        <!-- If using if and for together, if is always first. -->
        <!-- To make for to be first, put in diff elements or nesting -->
      </div>
    </div>
  </div>
</template>