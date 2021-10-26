import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    isUserLoggedIn: null,
    cart: []
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      }
      else {
        state.isUserLoggedIn = false

      }
    },
    setUser(state, user) {
      state.user = user
    }
    ,
    setCart(state, product) {
      state.cart.push(product)
    },
    removeCart(state,index)
    {
      state.cart.pop(index)
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token)
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    setCart({ commit }, product) {
      commit('setCart', product)
    }
    ,
    removeCart({ commit }, index) {
      commit('removeCart', index)
    }
  },
  modules: {
  }
})
