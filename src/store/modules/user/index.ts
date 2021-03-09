import user, {
  IUserLoginData,
  IUserPrvsetItem,
} from 'src/api/user'
import {
  IRootState,
} from 'src/store'
import { ActionContext } from 'vuex';

export interface IState {
  prvset: IUserPrvsetItem[]
}

const state: IState = {
  prvset: []
}

// getters
const getters = {
  prvsetCount: (state: IState) => {
    return state.prvset.length
  }
}

// actions
const actions = {
  login: async (
    { commit }: ActionContext<IState, IRootState>,
    loginData: IUserLoginData,
  ) => {
    const data = await user.fetchLogin(loginData)
    commit('setPrevset', data)
  },
}

// mutations
const mutations = {
  setPrevset (state: IState, prvset: IUserPrvsetItem[]) {
    state.prvset = prvset
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}