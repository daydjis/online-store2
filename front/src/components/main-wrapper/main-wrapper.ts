import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
    components: {
        ModalPopUp: () => import('../main-wrapper/el/ModalPopUp/ModalPopUp.vue'),
    },
})
export default class MainWrapper extends Vue {
    pageNumber = 1;
    productPerPage = 6;
    dropFilters = false;
    search = '';
    arrayOfProdduct = [];
    isPopUpOpen = false;
    isSort = false;

    mounted() {
        this.$store.dispatch('GET_PRODUCT');
        this.arrayOfProdduct = this.$store.getters.PRODUCT;
        this.pageCount();
        this.arrayOfProdduct = this.array;
    }
    sortByPrice(isSort) {
        let sortedArrayOfProduct = [];
        if (isSort) {
            sortedArrayOfProduct = this.$store.getters.PRODUCT.sort(function (a, b) {
                return Math.floor(a.price) - Math.floor(b.price);
            });
            this.isSort = false;
        } else {
            sortedArrayOfProduct = this.$store.getters.PRODUCT.sort(function (a, b) {
                return Math.floor(b.price) - Math.floor(a.price);
            });
            this.isSort = true;
        }

        return sortedArrayOfProduct;
    }
    pageCount() {
        return Math.ceil(this.$store.getters.PRODUCT.length / 6);
    }

    pageClick(page: number) {
        this.pageNumber = page;
    }

    paginationProduct() {
        const from = (this.pageNumber - 1) * this.productPerPage;
        const to = from + this.productPerPage;

        return this.$store.getters.PRODUCT.slice(from, to);
    }

    setProduct(product: any) {
        this.$store.dispatch('SET_P', product);

        this.isPopUpOpen = true;
    }

    closePopUp() {
        this.isPopUpOpen = false;
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
