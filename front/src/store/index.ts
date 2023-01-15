import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const BASE_URL = 'https://shop-back-u1bl.onrender.com/api/'

export default new Vuex.Store({
  state: {
    products: [],
  },

  getters: {
    PRODUCT(state) {
      return state.products
    },
  },

  mutations: {
    SET_PRODUCT_TO_STATE: (state, product) => {
      state.products = product
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
  },

  modules: {},
})
