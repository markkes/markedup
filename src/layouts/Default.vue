<template>
  <div class="layout bg-white border-blue-100">
    <header class="flex">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/artikelen/">Artikelen</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </nav>
    </header>
    <div class="content">
      <slot/>
    </div>

    <footer>
        Build with <a href="https://vue.js" target="_blank">Vue.js</a> & <a href="https://gridsome.org" target="_blank">Gridsome</a>
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

<style>

</style>
