<template>
  <h1>Login</h1>
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
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
} from 'vue'
import {
  Cell,
  CellGroup,
  Form,
  Field,
  Button,
  Toast,
} from 'vant';
import request from 'src/utils/request'


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
    const onSubmit = async (values: any) => {
      try {
        await request({
          url: "/user/v1/prelogin",
          method: "post",
          data: state,
        })
        Toast.success('登录成功！')
      } catch (err) {
        Toast.fail(err.message)
      }
    }
    return {
      state,
      onSubmit,
    }
  }
})
</script>

<style>
</style>