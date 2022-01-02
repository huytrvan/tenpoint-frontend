<template>
  <div class="">
    <header class="auth__header">
      <div class="auth__header-main">
        <NuxtLink to="./" class="auth__logo-wrapper">
          <img :src="require('~/static/tenpoint-logo-for-light-background.svg')" alt="" class="auth__logo">
          <p class="auth__brand-name">Tenpoint</p>
        </NuxtLink>
      </div>
    </header>
    <div class="content-wrapper">
      <Nuxt class="content"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Auth',
}
</script>
<style scoped>
  .auth__header {
    @apply py-2 px-20;
    @apply shadow-sm;
    @apply border-b border-gray-200;
  }
  .auth__header-main {
    max-width: 1320px;
    @apply mx-auto;
    @apply pt-1;
  }
  .auth__logo-wrapper {
    @apply inline-flex ;
  }
  .auth__logo {
    @apply bg-orange-600;
    @apply h-14 w-14;
    @apply p-2;
    @apply rounded;
    @apply mr-2;
  }
  .auth__brand-name {
    @apply text-orange-600;
    @apply font-semibold;
    @apply text-[2rem];
  }
  .content-wrapper {
  @apply px-20 pt-8;
  @apply bg-gray-100;
  @apply min-h-screen;
}
.content {
  max-width: 1320px;
  @apply mx-auto;
}
</style>
