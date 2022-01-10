<template>
  <div class="layout-store-admin">
    <StoreAdminHeader />
    <div class="content-wrapper">
      <div class="content">
        <h2>{{ titleStore }}</h2>
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
  @apply px-2 md:px-20 pt-10;
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
/* Global Style */
.store-admin__page-title {
  @apply text-xl font-semibold;
}
.store-admin__link {
  @apply text-orange-700 hover:text-orange-800;
  @apply ml-0.5;
}
/* .store-admin__instruction {
} */
</style>
