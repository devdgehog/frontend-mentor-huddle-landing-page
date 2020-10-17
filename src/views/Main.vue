<template>
<main>
  <img src="/images/illustration-mockups.svg" alt=""/>
  <article id="main-content">
    <h1>
      Build The Community Your Fans Will Love
    </h1>
    <p>
      Huddle re-imagines the way we build communities.
      You have a voice, but so does your audience.
      Create connections with your users as you engage in genuine discussion.
    </p>
  </article>
  <button class="call-to-action">
    Register
  </button>
  <div class="social-media">
    <i class="fab fa-facebook"></i>
    <i class="fab fa-twitter"></i>
    <i class="fab fa-instagram"></i>
  </div>
</main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
}

#main-content {
  display: grid;
  justify-content: center;
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
}

p {
  line-height: 1.5rem;
  text-align: center;
}

button {
  justify-self: center;
  background-color: white;
  border: none;
  border-radius: 1.25rem;
  width: 12.5rem;
  height: 2.5rem;
}

.social-media {
  color: white;
  justify-self: center;
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;

  i {
    display: grid;
    align-content: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: 1px solid white;
  }
}

img {
  width: 100%;
}
</style>
