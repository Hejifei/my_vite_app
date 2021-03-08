import shop from '../../../api/shop'

// initial state

const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  //  @ts-ignore
  getAllProducts ({ commit }) {
    //  @ts-ignore
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  //  @ts-ignore
  setProducts (state, products) {
    state.all = products
  },
  //  @ts-ignore
  decrementProductInventory (state, { id }) {
    //  @ts-ignore
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}