import {computed, onMounted, ref, watch} from "vue";

const useCart = () => {
  const cart = ref(null)
  const cartCount =  computed(() => {
    if (cart.value === null) return 0
    return cart.value.length
  })

  // React's componentDidMount
  onMounted(() => {
    fetch('http://localhost:3000/cart')
      .then(res => res.json())
      .then(data => cart.value = data.content)
  })

  // Watch only watch reassignments
  watch(cart, (value, oldValue) => {
    if (oldValue === null) return

    fetch('http://localhost:3000/cart', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: value
      })
    })
  })

  // Changed for push to reassigning array due to watch
  const updateCart = (id) => cart.value = cart.value.concat(id)

  return { cartCount, updateCart }
}

export default useCart