<template>
<main>
  <img src="/images/illustration-mockups.svg" alt="App illustration"/>
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
    <i class="fab fa-facebook-f"></i>
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
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "illustration"
    "content"
    "action"
    "social";

  padding-left: 10%;
  padding-right: 10%;
}

#main-content {
  grid-area: content;
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

.call-to-action {
  grid-area: action;
  justify-self: center;

  width: 12.5rem;
  height: 2.5rem;

  color: hsl(257, 40%, 49%);
  background-color: white;
  border: none;
  border-radius: 1.25rem;

  transition: all 0.5s;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: hsl(257, 40%, 49%);
    color: white;
    border: 1px solid white;
    font-size: 1rem;
  }
}

.social-media {
  grid-area: social;
  justify-self: center;
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;

  color: white;

  i {
    display: grid;
    align-content: center;
    justify-content: center;

    width: 1.5rem;
    height: 1.5rem;

    border-radius: 50%;
    border: 1px solid white;

    transition: all 0.5s;

    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}

img {
  grid-area: illustration;
  width: 100%;
}

@media (min-width: 45rem) {
  main {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "illustration content"
      "illustration action"
      "illustration social";
    padding-left: 5%;
    padding-right: 5%;
  }

  img {
    max-width: 50rem;
  }

  #main-content {
    align-self: flex-end;
    margin-left: 5vw;
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 400;
    line-height: 3rem;
    text-align: start;
  }

  p {
    padding-top: 2rem;
    font-size: 1.25rem;
    line-height: 2rem;
    text-align: start;
  }

  .call-to-action {
    justify-self: start;
    margin-left: 5vw;
  }

  .social-media {
    justify-self: end;

    i {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
</style>
