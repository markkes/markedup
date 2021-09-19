<template>
  <div
    :id="$options.className"
    :class="[
      $options.className,
      'grid h-screen text-neutral-600'
    ]">
    <AppHeader />
    <main>
      <slot/>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

export default {
  name: 'AppLayout',
  className: 'AppLayout container',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<style lang="postcss">
  .container {
    grid-template-rows: auto auto 1fr;
    max-width: 1200px;
  }

  footer {
    align-self: end;
  }

  main {
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    @screen lg {
      margin-top: 60px;
      padding-left: 240px;
      padding-right: 240px;
    }
  }

  h1 {
    @apply text-3xl pb-5 font-light leading-tight;
    @screen md {
      @apply text-5xl;
    }
  }

  h2 {
    @apply text-xl;
  }

  h3 {
    @apply text-lg;
  }

  a {
    @apply text-primary;
    transition: color .3s ease-in-out;
    &:hover {
      @apply text-secondary-500;
    }
  }

  .line-link {
    background-image: linear-gradient(currentColor, currentColor);	
    background-position: 100% 100%;	
    background-repeat: no-repeat;	
    background-size: 0% 5%;
    transition: background-size .3s cubic-bezier(.17, .67, .83, .67), color .3s ease-in-out;
    &:hover, &:focus {
      background-size: 100% 5%;
      background-position: 0% 100%;	
      transition: background-size 0.3s cubic-bezier(.17, .67, .83, .67), color .3s ease-in-out;
    }
  }

</style>
