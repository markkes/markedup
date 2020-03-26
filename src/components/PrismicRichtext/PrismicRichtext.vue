<template>
  <component
    :is="type"
    :class="[
      $options.className
    ]"
    v-html="PrismicDOM.RichText.asHtml(html, linkResolver)"
  />
</template>

<script>
import PrismicDOM from 'prismic-dom'
import { linkResolver } from '@/utils/helpers'

export default {
  name: 'PrismicRichtext',
  className: 'PrismicRichtext',
  props: {
    type: {
      type: String,
      default: 'div'
    },
    html: {
      type: Array,
      required: true
    },
  },
  data: () => ({
    PrismicDOM
  }),
  methods: {
    linkResolver
  }
}
</script>

<style>

</style>
