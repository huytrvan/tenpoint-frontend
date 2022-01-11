<template>
  <div class="layout-store-admin">
    <StoreAdminHeader />
    <div class="content-wrapper">
      <div class="content">
        <h2 class="store-admin__page-title">{{ titleStore }}</h2>
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
    StoreAdminHeader,
  },
  computed: {
    titleStore() {
      return this.$store.state.meta.title
    },
  },
}
</script>
<style scoped>
.content-wrapper {
  @apply md:px-20 pt-8 pb-12 lg:pt-10 lg:pb-16;
  @apply bg-gray-100;
  @apply min-h-screen;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
  @apply py-4 lg:py-8 px-2 md:px-10;
  @apply bg-white;
  @apply border border-gray-200;
  @apply shadow;
  @apply rounded;
}
</style>
<style>
/* Global Style */
.store-admin__page-title {
  @apply text-xl font-semibold;
  @apply text-center;
  @apply mb-3;
}
.store-admin__link {
  @apply text-orange-700 hover:text-orange-800;
  @apply ml-0.5;
}
.store-admin__form-section {
  @apply mb-6;
}
/* .store-admin__instruction {
} 
.store-admin__form {
}
.store-admin__form-label {
}
.store-admin__form-upload {
}
*/
</style>