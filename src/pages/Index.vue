<template>
  <Layout>

    <h1>Hallo. Ik ben Mark, een freelance front-end developer</h1>

    <p class="text-lg">
      Mijn naam is Mark Feenstra, eigenaar van Markedup. Geboren en getogen in Heemskerk en van jongs af aan al geinstresseerd in computers. Na mijn middelbare school ontwikkelde deze intresse zich geleidelijk richting het web. Sindsdien heb ik aan veel diverse creative projecten mee mogen werken. Momenteel ben ik in te huren op freelance basis en ben ik gespecialiseerd in het creëren van toffe front-end ervaringen.
    </p>

    <p>
      Vindt mij als @markkes op <a href="https://linkedin.com/in/mfeenstra86" title="LinkedIn" target="_blank">LinkedIn</a>, <a href="https://twitter.com/markkes" title="Twitter" target="_blank">Twitter</a> & <a href="https://github.com/markkes" title="Github" target="_blank">Github</a>.
    </p>

  </Layout>
</template>

<page-query>
  query Page {
    prismic {
      homepage(uid: "home", lang: "nl-NL") {
        welcome_message
        introduction
        social
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Front-end Developer in Heemskerk - Mark Feenstra - Markedup',
    meta: [
      { name: 'description', content: 'Markedup is een bedrijf van Mark Feenstra, freelance front-end developer uit Heemskerk. Neem contact met mij op wanneer u geintresseerd bent om samen toffe dingen te bouwen.' }
    ]
  }
}
</script>

<style>

</style>
