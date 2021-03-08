import shop from '../../../api/shop'

// initial state
// shape: [{ id, quantity }]
interface IState {
  items: object[]
  checkoutStatus: null | string
}
const state: IState = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state: IState, getters: any, rootState: any) => {
    //  @ts-ignore
    return state.items.map(({ id, quantity }) => {
      //  @ts-ignore
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  cartTotalPrice: (state: IState, getters: any) => {
    //  @ts-ignore
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  //  @ts-ignore
  checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  //  @ts-ignore
  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      //  @ts-ignore
      const cartItem = state.items.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  }
}

// mutations
const mutations = {
  //  @ts-ignore
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  //  @ts-ignore
  incrementItemQuantity (state, { id }) {
    //  @ts-ignore
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  //  @ts-ignore
  setCartItems (state, { items }) {
    state.items = items
  },
  //  @ts-ignore
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}