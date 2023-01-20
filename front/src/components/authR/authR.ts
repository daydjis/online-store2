import Component from 'vue-class-component'
import Vue from 'vue'
import UserInfo from './interface'

@Component
export default class Login extends Vue {
  post(info: object): void {
    this.$store.commit('SET_USER_INFO', info)
    this.$store.dispatch('AUTH_NEW_USER')
  }

  User: UserInfo = {
    login: '',
    name: '',
    surname: '',
    password: '',
  }
}
