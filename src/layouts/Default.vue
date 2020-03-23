<template>
  <div class="layout">
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

:root {
  --theme-color: #00a292;
  --theme-light-color: #c8d4d3;
  --theme-dark-color: #004c45;
  --bg-color: #FFFFFF;
  --text-color: #616968;
  --link-color: #000000;
  --white-color: #FFFFFF;
}

html,
 body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

html {
  border: 20px solid var(--theme-color);
}

body {
  background-color: var(--white-color);
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: transform ease-in-out .3s, background-size ease-in-out .3s, color ease-in-out .3s;
  text-decoration: none;
  background-image: linear-gradient(var(--theme-color), var(--theme-color));
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
}

a:hover {
  background-size: 100% 2px;
  color: var(--theme-color);
}

p a {  
  background-size: 0% 100%;
  background-position: 50% 100%;
}

p a:hover {
  background-size: 100% 100%;
  color: var(--white-color);

}

</style>
