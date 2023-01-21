<template>
    <div id="app">
        <MainHeader />
        <router-view />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainHeader from '../src/components/main-header/MainHeader.vue';
@Component({
    components: {
        MainHeader,
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

.header {
    display: flex;
    justify-content: space-evenly;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
