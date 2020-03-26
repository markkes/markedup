<template>
    <header class="flex justify-between p-10">
      <strong>
        <g-link to="/"> {{ this.global.site_name }}</g-link>
      </strong>
    </header>
</template>

<static-query>
  query Globals {
    prismic {
      allGlobals {
        edges {
          node {
            site_name
          }
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'AppHeader',
  computed: {
    global() {
      return this.$static.prismic.allGlobals.edges[0].node
    }
  }
}
</script>