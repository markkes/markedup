<template>
  <header class="flex items-center lg:items-baseline">
    <g-link to="/">
      <AppLogo />
    </g-link>
    <AppNavigation />
  </header>
</template>

<script>
  import AppLogo from '@/components/AppLogo/AppLogo.vue'
  import AppNavigation from '@/components/AppNavigation/AppNavigation.vue'

  export default {
    name: 'AppHeader',
    components: {
      AppLogo,
      AppNavigation
    }
  }
</script>

<style lang="postcss" scoped>

header {
  position: relative;
  padding: 20px 30px;
  @screen lg {
    padding-top: 65px;
    padding-left: 240px;
  }
  & a {
    @screen lg {
      transform: rotate(-82deg);
      position: absolute;
      top: 100px;
      left: 0;

    }
  }
}

svg {
  transition: transform 0.3s cubic-bezier(.17, .67, .83, .67);
  position: relative;
  top: 50%;
  width: 170px;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
}

</style>