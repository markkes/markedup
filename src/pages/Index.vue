<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hallo!</h1>

    <p>
      Ik ben Mark Feenstra, eigenaar van Markedup. Geboren en getogen in Heemskerk ben ik van jongs af aan al geinstresseerd in computers. Na mijn middelbare school ontwikkelde deze intresse zich langzaam aan richting het web. Sindsdien heb ik aan veel diverse creative projecten mee mogen werken. Momenteel ben ik in te huren als Freelance en ben ik gespecialiseerd in het crearen van toffe Front-end Systemen.
    </p>

    <p>
      Vindt mij als @markkes op <a href="www.linkedin.com/in/mfeenstra86" title="LinkedIn">LinkedIn</a>, <a href="https://linkedin.com/markkes" title="LinkedIn">LinkedIn</a> & <a href="https://github.com/markkes" title="Github">Github</a>.
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>

:root {
  --primary-color: #00a292;
  --secondary-color: #bdbdbd;
  --light-color: #FFF;
}

body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.home-links a {
  margin-right: 1rem;
}

a {
  color: var(--light-color);
  text-decoration: none;
}

</style>
