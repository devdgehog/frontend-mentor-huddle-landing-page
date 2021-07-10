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

<style lang="scss" scoped></style>
