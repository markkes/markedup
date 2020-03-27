<template>
  <section :class="$options.className">
    <PrismicRichtext
      v-if="title && title.length"
      :html="title" />

    <PrismicRichtext
      v-if="introduction && introduction.length"
      :class="`text-lg pb-3`"
      :html="introduction" />

    <PrismicRichtext
      v-if="sub_text && sub_text.length"
      :html="sub_text" />
  </section>
</template>

<script>
import PrismicRichtext from '@/components/PrismicRichtext/PrismicRichtext'

export default {
  name: 'AppHero',
  className: 'AppHero',
  components: {
    PrismicRichtext
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
    sub_text: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="postcss">

</style>
