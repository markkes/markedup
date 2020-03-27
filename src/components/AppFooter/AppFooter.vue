<template>
  <footer class="text-center p-10">
    <PrismicRichtext
      v-if="layout.footer_text && layout.footer_text.length"
      :class="`text-xs`"
      :html="layout.footer_text" />
  </footer>
</template>

<static-query>
  query Layout {
    prismic {
      layout(uid:"layout", lang:"nl-nl") {
        footer_text
      }
    }
  }
</static-query>

<script>
import PrismicRichtext from '@/components/PrismicRichtext/PrismicRichtext'

export default {
  name: 'AppFooter',
  components: {
    PrismicRichtext
  },
  computed: {
    layout() {
      return { ...this.$static.prismic.layout }
    }
  }
}
</script>