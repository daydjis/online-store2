<template>
  <div class="home">
    <MainHeader />
    <MainWrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainHeader from '../components/main-header/MainHeader.vue'
import MainWrapper from '../components/main-wrapper/MainWrapper.vue'

@Component({
  components: {
    MainWrapper,
    MainHeader,
  },
})
export default class HomeView extends Vue {}
</script>
