import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class MainWrapper extends Vue {
    pageNumber = 1;
    productPerPage = 6;

    mounted() {
        this.$store.dispatch('GET_PRODUCT');
        this.$store.getters.PRODUCT;
        this.pageCount();
    }

    pageCount() {
        const arrayOfProdduct = this.$store.getters.PRODUCT;
        return Math.ceil(arrayOfProdduct.length / 6);
    }

    pageClick(page) {
        this.pageNumber = page;
    }

    paginationProduct() {
        const from = (this.pageNumber - 1) * this.productPerPage;
        const to = from + this.productPerPage;
        return this.$store.getters.PRODUCT.slice(from, to);
    }

    theme: any = this.$store.getters.IS_DARK_THEME;
}
