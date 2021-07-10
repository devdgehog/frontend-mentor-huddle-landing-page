<template>
<main class="mainPanel">
  <img class="illustration" src="/images/illustration-mockups.svg" alt="App illustration"/>
  <article class="presentation">
    <h1 class="presentation__header">
      Build The Community Your Fans Will Love
    </h1>
    <p class="presentation__text">
      Huddle re-imagines the way we build communities.
      You have a voice, but so does your audience.
      Create connections with your users as you engage in genuine discussion.
    </p>
  </article>
  <button class="callToAction">
    Register
  </button>
  <div class="socialMedia">
    <button class="socialMedia__button" aria-label="Share on facebook">
    </button>
    <button class="socialMedia__button" aria-label="Share on twitter">
    </button>
    <button class="socialMedia__button" aria-label="Share on instagram">
    </button>
  </div>
</main>
</template>

<style lang="scss" scoped>
.mainPanel {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-areas:
    "illustration"
    "presentation"
    "action"
    "social";

  padding-left: 10%;
  padding-right: 10%;
}

.presentation {
  grid-area: presentation;
  display: grid;
  justify-content: center;
}

.presentation__header {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
}

.presentation__text {
  line-height: 1.5rem;
  text-align: center;
}

.callToAction {
  grid-area: action;
  justify-self: center;

  width: 12.5rem;
  height: 2.5rem;

  font-size: 1.125rem;
  color: hsl(257, 40%, 49%);
  background-color: white;
  border: none;
  border-radius: 1.25rem;
  box-shadow: 0 0.5vmin 1vmin 0.75vmin rgba(0, 0, 0, 0.2);

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: white;
    border: 1px solid white;
  }
}

:focus {
  outline: none;
  box-shadow: inset 0rem 0rem 0rem 0.2rem hsl(50, 100%, 50%);
}

.socialMedia {
  grid-area: social;
  justify-self: center;
  align-self: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.75rem;
}

.socialMedia__button {
  display: grid;
  align-content: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  border: 1px solid white;
  background-color: transparent;

  transition: all 0.5s;

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

.socialMedia__icon {
  font-size: 1.25rem;
  color: white;
}

.illustration {
  justify-self: center;
  grid-area: illustration;
  width: 49.375vw;
}

@media (min-width: 45rem) {
  .mainPanel {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 17fr 10fr 4fr;
    column-gap: 4%;
    row-gap: 3.5vh;
    grid-template-areas:
      "illustration presentation"
      "illustration action"
      "illustration social";
    padding-left: 5%;
    padding-right: 6%;
  }

  .illustration {
    max-width: 50rem;
  }

  .presentation {
    justify-self: start;
    align-self: flex-end;
  }

  .presentation__header {
    font-size: 2.55rem;
    font-weight: 400;
    line-height: 3.75rem;
    text-align: start;
  }

  .presentation__text {
    font-size: 1.125rem;
    line-height: 1.625rem;
    padding-top: 2vh;
    text-align: start;
  }

  .callToAction {
    align-self: flex-start;
    justify-self: start;
    height: 3.5rem;
    border-radius: 1.75rem;
  }

  .socialMedia {
    justify-self: end;
  }

  .socialMedia__button {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
