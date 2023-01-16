import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'https://shop-back-u1bl.onrender.com/api/'

export default new Vuex.Store({
  state: {
    products: [],
    user: {
      login: '',
      password: '',
    },
  },

  getters: {
    PRODUCT(state) {
      return state.products
    },
    USER(state) {
      return state.user
    },
  },

  mutations: {
    SET_PRODUCT_TO_STATE: (state, product) => {
      state.products = product
    },
    SET_USER_INFO: (state, newUser) => {
      state.user = newUser
    },
  },

  actions: {
    async GET_PRODUCT({ commit }) {
      try {
        const response = await axios.get(BASE_URL + 'products/', {
          method: 'GET',
        })
        commit('SET_PRODUCT_TO_STATE', response.data)
        console.log(response.data)
        return response
      } catch (error) {
        console.error(error)
      } finally {
        console.log('Ok')
      }
    },

    async POST_USER({ commit }) {
      try {
        const responce = await axios.post(
          'https://shop-back-u1bl.onrender.com/api/login',
          this.state.user
        )

        console.log(responce)
      } catch (error) {
        console.error(error)
      }
    },
  },

  modules: {},
})
