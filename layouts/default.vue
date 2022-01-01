<template>
  <div class="app">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '~/components/header/index.vue';

export default {
  components: {
    Header
  }
}
</script>
<style scoped>
.app {
  @apply font-sans antialiased
}
</style>
