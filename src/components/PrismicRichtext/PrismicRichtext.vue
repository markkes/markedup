<template>
  <component
    :is="type"
    :class="[
      $options.className
    ]"
    v-html="PrismicDOM.RichText.asHtml(html, linkResolver, htmlSerializer)"
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
    linkResolver,
    htmlSerializer: function (type, element, content, children) {
      const Elements = PrismicDOM.RichText.Elements;
      switch(type) {
    
        // Add a class to hyperlinks
        case Elements.hyperlink:
          var target = element.data.target ? 'target="' + element.data.target + '" rel="noopener"' : '';
          var linkUrl = PrismicDOM.Link.url(element.data, linkResolver);
          return '<a class="line-link"' + target + ' href="' + linkUrl + '">' + content + '</a>';
    
        // Don't wrap images in a <p> tag
        case Elements.image: 
          return '<img src="' + element.url + '" alt="' + element.alt + '">';
    
        // Return null to stick with the default behavior
        default: 
          return null;
      }
    }
  }
}

</script>

<style>

</style>
