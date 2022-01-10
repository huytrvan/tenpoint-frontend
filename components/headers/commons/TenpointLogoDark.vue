<template>
  <NuxtLink to="/" class="tenpoint-logo-dark">
    <img
      :src="require('~/static/tenpoint-logo-for-light-background.svg')"
      alt=""
      class="tenpoint-logo-dark__logo"
    />
    <p class="tenpoint-logo-dark__brand-name">Tenpoint</p>
  </NuxtLink>
</template>
<script>
export default {
  name: 'TenpointLogoDark',
}
</script>
<style>
/** PC view **/
.tenpoint-logo-dark {
  @apply flex items-center;
}
.tenpoint-logo-dark__logo {
  @apply h-12 w-12;
  @apply p-2;
  @apply bg-orange-600 rounded;
  @apply mr-1;
}
.tenpoint-logo-dark__brand-name {
  @apply font-semibold;
  @apply text-[1.5rem];
  @apply text-orange-600;
  /* Hide text in mobile */
  @apply hidden md:block;
}
</style>

