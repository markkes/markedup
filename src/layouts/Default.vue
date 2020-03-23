<template>
  <div class="layout">

    <header class="flex justify-between p-10">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="ml-4" to="/">Home</g-link>
        <g-link class="ml-4" to="/artikelen/">Artikelen</g-link>
        <g-link class="ml-4" to="/contact/">Contact</g-link>
      </nav>
    </header>

    <div class="content">
      <slot/>
    </div>

    <footer class="flex justify-center">
        <p class="text-sm">Build with <a href="https://vue.js" target="_blank">Vue.js</a> & <a href="https://gridsome.org" target="_blank">Gridsome</a>.</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="postcss">

  :root {
    --color-link: #000;
    --color-text: #7d828d;
    --color-primary: #5c6ac4;
    --color-secondary: #ecc94b;
  }

  body {
    @apply text-color-text;
  }

  h1 {
    @apply text-2xl;
  }

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  a {
    @apply text-black underline;
    &:hover {
      @apply text-primary no-underline;
    }
  }

</style>
