<template>
  <div class="layout-default">
    <FrontHeader />
    <div class="content-wrapper">
      <Nuxt class="content"/>
    </div>
  </div>
</template>
<script>
import FrontHeader from '~/components/headers/FrontHeader.vue';

export default {
  components: {
    FrontHeader
  }
}
</script>
<style scoped>
.content-wrapper {
  @apply px-20 pt-10;
  @apply bg-gray-100;
  @apply min-h-screen;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
}
</style>
