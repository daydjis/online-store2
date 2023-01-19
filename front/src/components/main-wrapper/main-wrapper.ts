import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class MainWrapper extends Vue {
    mounted() {
        this.$store.dispatch('GET_PRODUCT');
    }

    theme: any = this.$store.getters.IS_DARK_THEME;
    product = this.$store.getters.PRODUCT;
}
