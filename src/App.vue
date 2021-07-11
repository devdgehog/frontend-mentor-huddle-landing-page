<template>
<div class="appContainer">
  <TopBar></TopBar>
  <LandingPageContent></LandingPageContent>
  <Attribution></Attribution>
</div>
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
@import "@/styles/layout.scss";
@import "@/styles/colors.scss";

body, p, h1 {
  margin: 0;
}


:focus {
  outline: 5px solid $contrastColor;
}

#app {
  display: grid;
  justify-content: center;

  background-color: $secondaryColor;
  background-image: url('/images/bg-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;

  width: 100%;
  overflow: auto;

  @media (min-width: $mobileBackgroundBreakpoint) {
    background-image: url('/images/bg-desktop.svg');
    background-size: cover;
  }
}
</style>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.appContainer {
  width: 90vw;
  height: 100vh;
}

.appContainer {
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  grid-template-rows: min-content 1fr;
  grid-template-columns: auto;

  color: $mainColor;
  font-family: 'Open Sans', sans-serif;
}
</style>
