<template>
  <div class="layout-default">
    <StoreFrontHeader />
    <div class="content-wrapper">
      <Nuxt class="content" />
    </div>
  </div>
</template>
<script>
import StoreFrontHeader from '~/components/headers/StoreFrontHeader.vue'

export default {
  components: {
    StoreFrontHeader,
  },
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
