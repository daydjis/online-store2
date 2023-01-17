<template>
  <div class="home">
    <MainWrapper />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainWrapper from '../components/main-wrapper/MainWrapper.vue'

@Component({
  components: {
    MainWrapper,
  },
})
export default class HomeView extends Vue {}
</script>
