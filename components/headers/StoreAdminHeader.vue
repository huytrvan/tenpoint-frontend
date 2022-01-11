<template>
  <header class="store-admin-header">
    <div class="store-admin-header__main">
      <div class="store-admin-header__logo">
        <TenpointLogoDark />
      </div>
      <h1 class="store-admin-header__page-title">{{ titleStore }}</h1>
    </div>
  </header>
</template>
<script>
import TenpointLogoDark from '~/components/headers/commons/TenpointLogoDark.vue'
export default {
  name: 'StoreAdminHeader',
  components: {
    TenpointLogoDark
  },
  computed: {
    titleStore() {
      return this.$store.state.meta.title
    }
  }
}
</script>
<style>
.store-admin-header {
  @apply p-2 md:px-20;
  @apply shadow-sm;
  @apply border-b border-gray-200;
}
.store-admin-header__main {
  max-width: 1320px;
  @apply mx-auto;
  @apply flex items-center;
  @apply px-1;
}

.store-admin-header__page-title {
  @apply text-xl;
  @apply font-semibold;
  @apply ml-2 md:ml-4;
}

</style>
