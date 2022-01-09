<template>
  <NuxtLink to="./" class="tenpoint-logo-light">
    <img
      :src="require('~/static/tenpoint-logo-for-dark-background.svg')"
      alt=""
      class="tenpoint-logo-light__logo"
    />
    <p class="tenpoint-logo-light__name">Tenpoint</p>
  </NuxtLink>
</template>
<script>
export default {
  name: 'TenpointLogoLight',
}
</script>
<style>
/** PC view **/
.tenpoint-logo-light {
  @apply flex items-center;
}
.tenpoint-logo-light__logo {
  @apply h-12 w-12;
  @apply p-2;
  @apply bg-orange-100 rounded;
  @apply mr-1;
}
.tenpoint-logo-light__name {
  @apply font-semibold;
  @apply text-[1.5rem];
  /* Hide text in mobile */
  @apply hidden md:block;
}
</style>

