<template>
  <img alt="Vue logo" src="src/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p>My name is: <strong>{{name}}</strong></p>
  <MyInput :value='name' @onChange='onMyInputChange' />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  defineAsyncComponent,  
} from 'vue'
import HelloWorld from 'src/views/Home/index.vue'

export default defineComponent({
  name: 'App',
  provide: {
    inputValue: 'I come from prove/inject',
  },
  components: {
    HelloWorld,
    MyInput: defineAsyncComponent({
      loader: () => import('src/views/MyInput/index.vue'),
      // loadingComponent: LoadingComponent,
      // errorComponent: ErrorComponent,
      delay: 200,
      timeout: 300,
      suspensible: false,
    }),
  },
  setup: () => {
    const name = ref('heBi')
    const onMyInputChange = (value: string) => {
      name.value = value
    }
    return {
      name,
      onMyInputChange,
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