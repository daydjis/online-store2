<template>
    <div id="app">
        <Page />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        Page: () => import('./page.vue'),
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
