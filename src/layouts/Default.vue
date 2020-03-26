<template>
  <div class="layout">

    <AppHeader />

    <div class="content">
      <slot/>
    </div>

    <AppFooter />
  </div>
</template>

<static-query>
 
</static-query>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

export default {
  name: 'Default',
  className: 'Default',
  components: {
    AppHeader,
    AppFooter
  },
}

</script>


<style lang="postcss">

  :root {
    --color-link: #000;
    --color-text: #7d828d;
    --color-primary: #5c6ac4;
    --color-secondary: #ecc94b;
  }

  body {
    @apply text-color-text;
  }

  h1 {
    @apply text-2xl;
  }

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  a {
    @apply text-black underline;
    &:hover, &:focus {
      @apply text-primary no-underline;
    }
  }

</style>
