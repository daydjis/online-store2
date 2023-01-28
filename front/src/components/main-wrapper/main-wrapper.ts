import Component from 'vue-class-component';
import Vue from 'vue';
import { Watch } from 'vue-property-decorator/lib/decorators/Watch';

@Component
export default class MainWrapper extends Vue {
    pageNumber = 1;
    productPerPage = 6;
    dropFilters = false;
    search = '';
    arrayOfProdduct = [];

    mounted() {
        this.$store.dispatch('GET_PRODUCT');
        this.arrayOfProdduct = this.$store.getters.PRODUCT;
        this.pageCount();
    }

    pageCount() {
        return Math.ceil(this.$store.getters.PRODUCT.length / 6);
    }

    pageClick(page) {
        this.pageNumber = page;
    }

    paginationProduct() {
        const from = (this.pageNumber - 1) * this.productPerPage;
        const to = from + this.productPerPage;

        return this.$store.getters.PRODUCT.slice(from, to);
    }

    get array() {
        if (this.search) {
            this.productPerPage = 100;
            return this.paginationProduct().filter((item) =>
                item.title.toLowerCase().includes(this.search.toLowerCase())
            );
        } else {
            this.productPerPage = 6;
            return this.paginationProduct();
        }
    }

    theme: boolean = this.$store.getters.IS_DARK_THEME;
}
