<script setup>
  import { ref } from 'vue'
  import socksGreenImage from './assets/images/socks_green.jpeg'
  import socksBlueImage from './assets/images/socks_blue.jpeg'

  // Single-File Component === React Hooks
  // Composables === Custom Hooks

  // Wrapping ref for Reactivity (useState)
  // Use reactive if using object with bunch of related data
  const product = ref('Socks')
  const image = ref(socksGreenImage)
  const inStock = ref(true)

  const details = ref(['50% cotton', '50% wool', '20% polyester'])

  const variants = ref([
    { id: 2234, color: 'green', image: socksGreenImage },
    { id: 2235, color: 'blue', image: socksBlueImage },
  ])

  const cart = ref(0)
  const addToCart = () => cart.value += 1

  const updateImage = (variantImage) => {
    image.value = variantImage
  }
</script>
<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{cart}})</div>
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
        <div
          v-for="variant in variants"
          :key="variant.id"
          @mouseover="updateImage(variant.image)"
        >
          {{ variant.color }}
        </div>
        <!-- If using if and for together, if is always first. -->
        <!-- To make for to be first, put in diff elements or nesting -->

        <button class="button" v-on:click="addToCart">Add to Cart</button>
        <!-- Can use event modifiers -->
        <!-- e.g. @click.once = make sure event triggered only once -->
        <!-- @click.prevent = prevent native behavior. event.preventDefault -->
        <!-- @click.stop = stop propagating further up -->
        <!-- @keydown.enter = Enter key keydown -->
      </div>
    </div>
  </div>
</template>