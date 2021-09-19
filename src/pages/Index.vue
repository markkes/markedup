<template>
  <AppLayout>
    <AppHero
      :title="page.title"
      :introduction="page.introduction"
      :body_text="page.body_text"
      :sub_text="page.sub_text" />
      
  </AppLayout>
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
import AppLayout from '@/layouts/AppLayout.vue'
import AppHero from '@/components/AppHero/AppHero.vue'

export default {
  name: 'PageIndex',
  className: 'PageIndex',
  components: {
    AppLayout,
    AppHero
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
  props: {
    title: {
      type: Array,
      default: () => ([])
    },
    introduction: {
      type: Array,
      default: () => ([])
    },
    body_text: {
      type: Array,
      default: () => ([])
    },
    sub_text: {
      type: Array,
      default: () => ([])
    },
  },
  computed: {
    page() {
      return { ...this.$page.prismic.page }
    }
  }
}
</script>
