<template>
<header class="topbar">
  <img src="/images/logo.svg" alt="Huddle logo" />
</header>
</template>

<style lang="scss" scoped>
@import "@/styles/layout.scss";

.topbar {
  padding: 10vmin 10vmin 0 10vmin;
  display: grid;
  justify-content: center;
}

img {
  height: 2rem;
}

@media (min-width: $mobileBreakpoint) {
  .topbar {
    justify-content: start;
  }

  img {
    height: 3rem;
  }
}
</style>
