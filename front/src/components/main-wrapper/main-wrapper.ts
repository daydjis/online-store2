import Component from 'vue-class-component'
import Vue from 'vue'
import axios from 'axios'

@Component
export default class MainWrapper extends Vue {
  getProduct() {
    async function getUser() {
      try {
        const response = await axios.get(
          'https://shop-back-u1bl.onrender.com/api/products/'
        )
        response.data.map((e: object): void => {
          console.log(e)
        })
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }
}