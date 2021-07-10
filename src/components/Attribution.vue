<template>
<footer>
  <p class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="attribution__link">Frontend Mentor</a>.
    Coded by <a href="https://twitter.com/devdgehog" target="_blank" class="attribution__link">devdgehog</a>.
  </p>
</footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100vw;
  bottom: 0;

  display: grid;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.3);
}

.attribution {
  font-size: 0.75rem;
  text-align: center;
}

.attribution__link {
  color: gold;
}

:focus {
  outline: none;
  box-shadow: 0rem 0rem 0rem 0.2rem hsl(50, 100%, 50%);
}
</style>
