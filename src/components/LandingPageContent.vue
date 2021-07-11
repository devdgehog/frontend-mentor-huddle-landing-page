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
      <font-awesome-icon :icon="['fab', 'facebook-f']" class="socialMedia__icon" aria-hidden="true"/>
    </button>
    <button class="socialMedia__button" aria-label="Share on twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" class="socialMedia__icon" aria-hidden="true"/>
    </button>
    <button class="socialMedia__button" aria-label="Share on instagram">
      <font-awesome-icon :icon="['fab', 'instagram']" class="socialMedia__icon" aria-hidden="true"/>
    </button>
  </div>
</main>
</template>

<style lang="scss" scoped>
@import "@/styles/layout.scss";
@import "@/styles/colors.scss";
.mainPanel {
  display: grid;
  place-items: center;
  grid-template-areas:
    "illustration"
    "presentation"
    "action"
    "social";
}

.illustration {
  justify-self: center;
  grid-area: illustration;
  max-height: 33vh;
}

.presentation {
  grid-area: presentation;
  display: grid;
  justify-items: center;
  row-gap: 1rem;
}

.presentation__header {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.75rem;
  max-width: 20ch;
}

.presentation__text {
  line-height: 1.5rem;
  text-align: left;
  min-width: 35ch;
  max-width: 60ch;
}

.callToAction {
  grid-area: action;
  justify-self: center;

  width: 12.5rem;
  height: 2.5rem;

  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 600;
  color: $secondaryColor;
  background-color: $mainColor;

  border: none;
  border-radius: 1.25rem;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  &:hover {
    outline: 5px solid $contrastColor;
  }
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
  border: 1px solid $mainColor;
  background-color: transparent;

  cursor: pointer;

  &:hover {
    outline: 5px solid $contrastColor;
  }

  &:hover, &:focus {
    border: none;
  }
}

.socialMedia__icon {
  font-size: 1.25rem;
  color: white;
}

@media (min-width: $mobileBreakpoint) {
  .mainPanel {
    grid-template-areas:
      "illustration presentation"
      "illustration action"
      "illustration social";
    row-gap: 3rem;
    column-gap: 5vw;
  }

  .illustration {
    max-height: 50vh;
    max-width: 50rem;
  }

  .presentation {
    justify-self: start;
    align-self: flex-end;
    row-gap: 3rem;
  }

  .presentation__header {
    justify-self: start;
    font-size: 2.55rem;
    font-weight: 400;
    line-height: 2.75rem;
    text-align: start;
  }

  .presentation__text {
    font-size: 1.125rem;
    line-height: 1.625rem;
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
