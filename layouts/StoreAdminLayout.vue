<template>
  <div class="">
    <StoreAdminHeader />
    <div class="content-wrapper">
      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import StoreAdminHeader from '~/components/headers/StoreAdminHeader.vue'
export default {
  name: 'StoreAdminLayout',
  components: {
    StoreAdminHeader
  }
}
</script>
<style scoped>
  .content-wrapper {
  @apply px-2 md:px-20 pt-8;
  @apply bg-gray-100;
  @apply min-h-screen;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
  @apply py-8 px-10;
  @apply bg-white;
  @apply border border-gray-200;
  @apply shadow;
  @apply rounded;
}
</style>
<style>
.store-admin__title {
  @apply text-xl font-semibold;
}
</style>
