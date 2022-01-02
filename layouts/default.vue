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
.content-wrapper {
  @apply px-20 pt-10;
  @apply bg-slate-100;
  @apply min-h-screen;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
}
</style>
