<template>
  <h1>Shopping Cart Example</h1>
  <hr>
  <h2>Products</h2>
  <ProductList/>
  <hr>
  <ShoppingCart/>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import ProductList from 'src/components/ProductList.vue'
import ShoppingCart from 'src/components/ShoppingCart.vue'


export default defineComponent({
  name: 'App',
  components: {
    ProductList,
    ShoppingCart,
  },
  setup: () => {
    return {
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>