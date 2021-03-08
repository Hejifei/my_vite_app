<template>
  <h1>myInput</h1>
  <input :value='value' @input="$emit('onChange', $event.target.value)" v-focus />
  {{inputValue}}
  {{value}}
  <p>My Mom is {{reactiveData.name}}, she is {{reactiveData.age}} </p>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  reactive,
} from 'vue'
interface IMyInputProps {
  value: string
  onChange: (value: string) => void
}
export default defineComponent({
  name: 'MyInput',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const reactiveData = reactive({
      name: 'Alias',
      age: 28,
    })
    return {
      reactiveData,
    }
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
