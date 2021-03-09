<template>
  <h1>Login- {{prvsetCount}}</h1>
  <van-cell-group :title='`list of prevset (${prvsetCount})`' is-link>
    <van-cell
      v-for="item in prvsetList"
      :key='item.id'
      :title="item.prvset_desc"
      :value="item.prvset_name"
      :label="item.prvset_logo"
    />
  </van-cell-group>
  <van-form @submit="onSubmit">
    <van-field
      v-model="state.username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="state.password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
} from 'vue'
import {
  Cell,
  CellGroup,
  Form,
  Field,
  Button,
  Toast,
} from 'vant'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Form.name]: Form,
  },
  setup: () => {
    const state = reactive({
      username: 13199999999,
      password: '',
    })
    const store = useStore()
    const prvsetCount = computed(() => store.getters['user/prvsetCount'])
    const prvsetList = computed(() => store.state.user.prvset)

    const onSubmit = async (values: any) => {
      try {
        await store.dispatch('user/login', state)
        Toast.success('登录成功！')
      } catch (err) {
        Toast.fail(err.message)
      }
    }

    return {
      state,
      onSubmit,
      prvsetCount,
      prvsetList,
    }
  }
})
</script>

<style>
</style>