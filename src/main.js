// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag keywords
  head.meta.push({
    name: 'keywords',
    content: 'Front-end Developer, web, freelancer, Mark Feenstra'
  })

  // Add a meta tag author
  head.meta.push({
    name: 'author',
    content: 'Mark Feenstra'
  })
  
}
