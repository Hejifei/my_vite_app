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

const Login =  defineComponent({
  name: 'LoginJSX',
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
  },
  render() {
    const {prvsetList, prvsetCount, onSubmit} = this
    return <div>
      <h1>Login- {prvsetCount}</h1>
      <CellGroup title={`list of prevset (${prvsetCount})`} is-link>
        {
          prvsetList.map((item: any) => <Cell
              key={item.id}
              title={item.prvset_desc}
              value={item.prvset_name}
              label={item.prvset_logo}
          />)
        }
      </CellGroup>
      <Form
        //  @ts-ignore
        onSubmit={onSubmit}
      >
        <Field
          //  @ts-ignore
          vModel={this.state.username}
          name="用户名"
          label="用户名"
          placeholder="用户名"
          rules={[{ required: true, message: '请填写用户名' }]}
        />
        <Field
          //  @ts-ignore
          vModel={this.state.password}
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          rules={[{ required: true, message: '请填写密码' }]}
        />
        <div style="margin: 16px;">
          <Button round block type="primary" native-type="submit">
            提交
          </Button>
        </div>
      </Form>
    
    </div>
  }
})

export default Login
