import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class MainWrapper extends Vue {
    mounted() {
        this.$store.dispatch('GET_PRODUCT');
        this.$store.getters.PRODUCT;
    }

    theme: any = this.$store.getters.IS_DARK_THEME;
}
