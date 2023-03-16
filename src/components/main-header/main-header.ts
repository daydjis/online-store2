import { ref } from 'vue';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class MainHeader extends Vue {
    IsAuth = false;

    clearcookie() {
        this.$store.dispatch('DELETE_COOKIE');
        this.checkAuth();
    }

    nickname: string;
    @Watch('this.$store.getters.AUTH')
    public checkAuth() {
        this.$forceUpdate();
        if (document.cookie) {
            this.$store.commit('IS_AUTH', true);
            this.IsAuth = true;
        } else {
            this.IsAuth = false;
            this.$store.commit('IS_AUTH', false);
        }
    }

    mounted() {
        this.checkAuth();
        if (this.$store.getters.USER_NICKNAME) {
            this.nickname = this.$store.getters.USER_NICKNAME;
        } else {
            this.nickname = localStorage.getItem('login');
        }
    }

    checkTheme() {
        this.checkAuth();
        if (!this.$store.getters.DARK_THEME) {
            this.$store.commit('IS_DARK_THEME', true);
            document.body.style.backgroundColor = 'black';
        } else {
            this.$store.commit('IS_DARK_THEME', false);
            document.body.style.backgroundColor = 'white';
        }
    }

    get auth() {
        return this.IsAuth;
    }
}
