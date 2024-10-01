<script setup>
  import {reactive} from "vue";

  const emit = defineEmits(['review-submitted'])

  const review = reactive({
    name: '',
    content: '',
    rating: null
  })

  const onSubmit = () => {
    const reviewData = JSON.parse(JSON.stringify(review))
    emit('review-submitted', reviewData)

    Object.assign(review, {
      name: '',
      content: '',
      rating: null
    })
  }
</script>

<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3> Leave a review </h3>
    <label for="name">Name:</label>
    <input id="name" v-model="review.name"/>

    <label for="review">Review:</label>
    <textarea id="review" v-model="review.content"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="review.rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>

    <input class="button" type="submit" value="Review">
  </form>
</template>