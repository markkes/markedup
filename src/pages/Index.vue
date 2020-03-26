<template>
  <Layout>

    <PrismicRichtext
      v-if="page.title && page.title.length"
      :html="page.title" />

    <PrismicRichtext
      v-if="page.introduction && page.introduction.length"
      :html="page.introduction" />

    <PrismicRichtext
      v-if="page.sub_text && page.sub_text.length"
      :html="page.sub_text" />

  </Layout>
</template>

<page-query>
  query Page {
    prismic {
      page(uid: "home", lang: "nl-nl") {
        meta_title
        meta_description
        title
        introduction
        body_text
        sub_text
      }
    }
  }
</page-query>

<script>
import PrismicRichtext from '@/components/PrismicRichtext/PrismicRichtext'

export default {
  name: 'PageIndex',
  className: 'PageIndex',
  components: {
    PrismicRichtext
  },
  metaInfo() {
    return ({
      title: this.page.meta_title,
      meta: [
        {
          name: 'description',
          content: this.page.meta_description
        },
        {
          name: 'author',
          content: this.page.meta_author
        },
        {
          property: 'og:title',
          content: this.page.meta_title
        },
        {
          property: 'og:description',
          content: this.page.meta_description
        },
        {
          property: 'twitter:title',
          content: this.page.meta_title
        },
        {
          property: 'twitter:description',
          content: this.page.meta_description
        },
      ]
    })
  },
  computed: {
    page() {
      return { ...this.$page.prismic.page }
    }
  }
}
</script>

<style>

</style>

