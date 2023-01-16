import Component from 'vue-class-component'
import Vue from 'vue'

@Component
export default class Login extends Vue {
  post(info: object): void {
    this.$store.commit('SET_USER_INFO', info)
    this.$store.dispatch('POST_USER')
  }

  user: any = {
    login: '',
    password: '',
  }
}
