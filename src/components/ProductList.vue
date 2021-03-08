<template>
  <ul>
    <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{(product.price) }}
        <br>
        <button
            :disabled="!product.inventory"
            @click="addProductToCart(product)">
            Add to cart
        </button>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const products = computed(() => store.state.products.all)
    const addProductToCart = async (product) => await store.dispatch('cart/addProductToCart', product)
    const getInitData = async () => {
        await store.dispatch('products/getAllProducts')
    }
    getInitData()
    return {
      products,
      addProductToCart,
    }
  }
  // computed: mapState({
  //   products: state => state.products.all
  // }),
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  // created () {
  //   this.$store.dispatch('products/getAllProducts')
  // }
}
</script>