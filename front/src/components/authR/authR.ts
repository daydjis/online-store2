import Component from 'vue-class-component';
import Vue from 'vue';
import UserInfo from './interface';

@Component
export default class Login extends Vue {
    objErrors = {
        login: '',
        name: '',
        surname: '',
        password: '',
    };

    User: UserInfo = {
        login: '',
        name: '',
        surname: '',
        password: '',
    };

    isValid: boolean = true;

    regex = /^[a-zA-Z0-9_.]{6,30}$/;

    fCheckValidFormLogin(login: string): void {
        this.fCheckValid();
        if (login.match(this.regex)) {
            this.objErrors.login = '';
        } else {
            this.objErrors.login = 'Введите корретный никнейм';
        }
    }
    fCheckValidFormName(name: string): void {
        this.fCheckValid();
        if (name.length > 6 && name.length < 30) {
            this.objErrors.name = '';
        } else {
            this.objErrors.name = 'Введите корретное имя';
        }
    }
    fCheckValidFormSurname(surname: string): void {
        this.fCheckValid();
        if (surname.length > 6 && surname.length < 30) {
            this.objErrors.surname = '';
        } else {
            this.objErrors.surname = 'Введите корретную фамилию';
        }
    }
    fCheckValidFormPassword(password: string): void {
        this.fCheckValid();
        if (password.length > 6 && password.length < 30) {
            this.objErrors.password = '';
        } else {
            this.objErrors.password = 'Введите корретный пароль';
        }
    }

    fCheckValid() {
        for (const value of Object.values(this.objErrors)) {
            if (value !== '') {
                this.isValid = true;
            } else this.isValid = false;
        }
    }

    fPostUserInfo(info: UserInfo) {
        this.$store.commit('SET_USER_INFO', info);
        this.$store.dispatch('AUTH_NEW_USER');
    }

    get isValidOk() {
        return this.isValid;
    }
}
