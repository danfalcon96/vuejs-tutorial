<script setup>
import { ref, computed } from 'vue'
import socksGreenImage from '@/assets/images/socks_green.jpeg'
import socksBlueImage from '@/assets/images/socks_blue.jpeg'

import ReviewForm from "@/components/ReviewForm.vue"
import ReviewList from "@/components/ReviewList.vue"
// Single-File Component === React Hooks
// Composables === Custom Hooks
// @ = absolute path syntax

// Define Props = Compiler Macro
// ! Do not change the value of a prop
const props = defineProps({
  premium: {
    type: Boolean,
    required: true
  }
})

// Custom Events = defineEmits
const emit = defineEmits(['add-to-cart'])

// Wrapping ref for Reactivity (useState)
// Use reactive if using object with bunch of related data
const product = ref('Socks')
const brand = ref('Vue Mastery')

const selectedVariant = ref(0)

// Computed = values that need to compute, it update automatically
// Watch =  watch and callback if a specific updated
// WatchEffect = watch on all changes, better on any state change
const image = computed(() => {
  return variants.value[selectedVariant.value].image
})
const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0
})

const shipping = computed(() => {
  if (props.premium) {
    return 'Free'
  }
  return 2.99
})

const details = ref(['50% cotton', '50% wool', '20% polyester'])

const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
])

const reviews = ref([])

const addToCart = () => {
  emit('add-to-cart', variants.value[selectedVariant.value].id)
}

const title = computed(() => {
  return brand.value + ' ' + product.value
})

const updateVariant = (index) => {
  selectedVariant.value = index
}

const addReview = (review) => {
  reviews.value.push(review)
  console.log(review)
}
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- v-bind = binding data to the script variable -->
        <img :src="image">
      </div>
      <div class="product-info">
        <!-- Equivalent of {} in React -->
        <h1> {{ title }}</h1>
        <!-- Can use v-show = Still rendered. display: none. More performant -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <!-- style="{}" = React's style={{}} -->
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
        </div>
        <!-- If using if and for together, if is always first. -->
        <!-- To make for to be first, put in diff elements or nesting -->

        <!-- Class binding: classname: condition. Can be also array. -->
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          v-on:click="addToCart"
          :disabled="!inStock"
        >
          Add to Cart
        </button>
        <!-- Can use event modifiers -->
        <!-- e.g. @click.once = make sure event triggered only once -->
        <!-- @click.prevent = prevent native behavior. event.preventDefault -->
        <!-- @click.stop = stop propagating further up -->
        <!-- @keydown.enter = Enter key keydown -->
      </div>
    </div>
    <ReviewList :reviews="reviews"></ReviewList>
    <ReviewForm @review-submitted="addReview"></ReviewForm>
  </div>
</template>