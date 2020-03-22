<template>
  <Layout>

    <h1>Hallo. Ik ben een freelance front-end developer</h1>

    <p>
      Mijn naam is Mark Feenstra, eigenaar van Markedup. Geboren en getogen in Heemskerk en van jongs af aan al geinstresseerd in computers. Na mijn middelbare school ontwikkelde deze intresse zich geleidelijk richting het web. Sindsdien heb ik aan veel diverse creative projecten mee mogen werken. Momenteel ben ik in te huren als Freelance en ben ik gespecialiseerd in het crearen van toffe Front-end Systemen.
    </p>

    <p class="social">
      Vindt mij als @markkes op <a href="https://linkedin.com/in/mfeenstra86" title="LinkedIn">LinkedIn</a>, <a href="https://twitter.com/markkes" title="Twitter">Twitter</a> & <a href="https://github.com/markkes" title="Github">Github</a>.
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Front-end Developer in Heemskerk - Mark Feenstra - Markedup',
    description: 'Markedup is een bedrijf van Mark Feenstra, freelance front-end developer uit Heemskerk. Neem contact met mij op wanneer u geintresseerd bent om samen toffe dingen te bouwen.'
  }
}
</script>

<style>

:root {
  --theme-color: #00a292;
  --theme-light-color: #c8d4d3;
  --theme-dark-color: #004c45;
  --white-color: #FFFFFF;
}

html,
 body {
  background-color: var(--theme-color);
  color: var(--theme-light-color);
}

html {
  font-size: 1em;
}

p {
  font-size: 20px;
}

a {
  color: var(--white-color);
  text-decoration: none;
  transition: background-size cubic-bezier(0, .5, 0, 1) .3s;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
}

.social {
  font-size: 19px;
}

a:hover {
  background-size: 100% 2px;
}

</style>
