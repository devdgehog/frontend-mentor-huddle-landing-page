<template>
  <TopBar></TopBar>
  <LandingPageContent></LandingPageContent>
  <Attribution></Attribution>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBar from '@/components/TopBar.vue';
import Attribution from '@/components/Attribution.vue';
import LandingPageContent from '@/components/LandingPageContent.vue';

export default defineComponent({
  name: 'App',
  components: {
    TopBar,
    LandingPageContent,
    Attribution,
  },
})
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  display: grid;
  align-items: stretch;
  justify-content: center;
  grid-template-rows: 1fr 8fr;

  background-color: hsl(257, 40%, 49%);
  background-image: url('/images/bg-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;

  color: white;
  font-family: 'Open Sans', sans-serif;

  @media (min-width: 45rem) {
    background-image: url('/images/bg-desktop.svg');
    background-size: cover;
  }
}
</style>
