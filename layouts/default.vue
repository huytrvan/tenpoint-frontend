<template>
  <div class="layout-default">
    <Header />
    <div class="content-wrapper">
      <Nuxt class="content"/>
    </div>
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
.layout-default {
  @apply font-sans antialiased;
}
.content-wrapper {
  @apply px-20;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
}
</style>
