<template>
    <div id="app">
        <Page />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Page from './page.vue';
@Component({
    components: {
        Page,
    },
})
export default class HelloWorld extends Vue {}
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
