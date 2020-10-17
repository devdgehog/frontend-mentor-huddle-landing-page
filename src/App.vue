<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
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
  grid-template-rows: 1fr 6fr;

  background-color: hsl(257, 40%, 49%);
  background-image: url('/images/bg-mobile.svg');
  background-repeat: no-repeat;
  background-size: contain;

  color: white;
  font-family: 'Open Sans', sans-serif;
}
</style>
