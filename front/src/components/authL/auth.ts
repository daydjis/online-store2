import Component from 'vue-class-component';
import Vue from 'vue';
import UserInfo from './interface';

@Component
export default class Login extends Vue {
    post(info: object): void {
        this.$store.commit('SET_USER_INFO', info);
        this.$store.dispatch('AUTH_LOGIN');
    }

    Errors = {
        length: 'Пароль должен содержать не меньше 6 символов и не более 30',
    };

    checkPwdLenght() {
        if (this.User.login.length < 6) {
            return true;
        }
    }

    User: UserInfo = {
        login: '',
        password: '',
    };
}
