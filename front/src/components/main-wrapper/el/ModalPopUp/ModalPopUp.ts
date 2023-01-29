import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class ModalPopUp extends Vue {
    infoProduct;

    mounted() {
        this.infoProduct = this.$store.getters.THIS_PRODUCT;
    }

    info() {
        return this.infoProduct;
    }
}
