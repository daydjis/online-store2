import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class MainHeader extends Vue {
    // $store: any;

    clearcookie() {
        this.$store.dispatch('DELETE_COOKIE');
        this.checkAuth();
    }

    nickname: string;

    mounted() {
        this.checkAuth();

        if (this.$store.getters.USER_NICKNAME) {
            this.nickname = this.$store.getters.USER_NICKNAME;
        } else {
            this.nickname = localStorage.getItem('login');
        }
    }

    checkAuth() {
        if (document.cookie) {
            console.log('yes');

            return true;
        } else {
            console.log('no');

            return false;
        }
    }

    checkTheme() {
        if (!this.$store.getters.DARK_THEME) {
            this.$store.commit('IS_DARK_THEME', true);
            document.body.style.backgroundColor = 'black';
        } else {
            this.$store.commit('IS_DARK_THEME', false);
            document.body.style.backgroundColor = 'white';
        }
    }
}
