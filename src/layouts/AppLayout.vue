<template>
  <div
    :id="$options.className"
    :class="[
      $options.className,
      'grid h-screen'
    ]">
    <AppHeader />
    <main>
      <slot/>
    </main>
    <AppFooter />
  </div>
</template>

<static-query>
 
</static-query>

<script>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import AppFooter from '@/components/AppFooter/AppFooter.vue'

export default {
  name: 'AppLayout',
  className: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<style lang="postcss">

  :root {
    --color-link: #000;
    --color-text: #8c9291;
    --color-primary: #00a292;
    --color-secondary: #ecc94b;
  }

  body {
    @apply text-color-text;
  }

  .AppLayout {
    grid-template-rows: auto auto 1fr;
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
    @apply text-black no-underline;
    transition: color .3s ease-in-out;
    &:hover {
      @apply text-primary;
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
