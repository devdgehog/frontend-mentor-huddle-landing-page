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

<style lang="scss"></style>
