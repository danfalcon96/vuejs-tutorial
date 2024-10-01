<script setup>
  defineProps({
    reviews: {
      type: Array,
      required: true,
    }
  })
</script>

<template>
  <div class="review-container">
    <h3>
      <!-- Default slot: <slot></slot> -->
      <!-- Named slot: <slot name="name"></slot> -->
      <slot name="heading"></slot>
    </h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <!-- Use binding to pass variable to parent -->
        <slot name="item" :review="review">
          <!-- Inside slot is default if there is no passed from parent -->
          <span>{{ review.name }}</span>: <span>{{ review.content }}</span>
        </slot>
      </li>
    </ul>
  </div>
</template>