<template>
  <div class="layout">

    <header class="flex justify-between p-10">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="ml-3" to="/">Home</g-link>
        <g-link class="ml-3" to="/artikelen/">Artikelen</g-link>
        <g-link class="ml-3" to="/contact/">Contact</g-link>
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

<style>

</style>
