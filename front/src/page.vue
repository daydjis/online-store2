<template>
    <div>
        <MainHeader />

        <router-view />
    </div>
</template>

<script>
import Component from 'vue-class-component';
import Vue from 'vue';
@Component({
    components: {
        MainHeader: () => import('../src/components/main-header/MainHeader.vue'),
        MainWrapper: () => import('../src/components/main-wrapper/MainWrapper.vue'),
    },
})
export default class Page extends Vue {}
</script>
