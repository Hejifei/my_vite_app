import { createStore, createLogger } from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import user, {IState as IUserState} from './modules/user'

export interface IRootState {
  user: IUserState
}

//  @ts-ignore
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cart,
    products,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})