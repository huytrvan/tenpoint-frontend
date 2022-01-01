<template>
  <header class="header">
    <div class="header__auth">
      <div class="header__seller-auth">
        <NuxtLink to="login?next=https://localhost:3000" class="">
          <span>My Seller page</span>
        </NuxtLink>
          <span class="_separator">|</span>
        <NuxtLink to="login?next=https://localhost:3000" class="">
          <span>+ Free Listing</span>
        </NuxtLink>
      </div>
      <div class="header__buyer-auth">
        <NuxtLink to="login?next=https://localhost:3000" class="">
          <span>Log in</span>
        </NuxtLink>
          <span class="_separator">|</span>
        <NuxtLink to="signup?next=https://localhost:3000" class="">
          <span>Sign up</span>
        </NuxtLink>
      </div>
    </div>
    <div class="header__main">
      <NuxtLink to="./" class="brand__wrapper">
        <img :src="require('~/static/tenpoint-logo.svg')" alt="" class="brand__logo">
        <p class="brand__name">Tenpoint</p>
      </NuxtLink>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  .header {
    @apply py-1 px-20 shadow-sm;
    @apply bg-orange-600;
    @apply text-orange-100;
  }
  .brand__wrapper, .header__auth, .header__main {
    @apply flex justify-between;
  }
  /* Keep header in max-width */
  .header__auth, .header__main {
    max-width: 1320px;
    @apply mx-auto;
  }
  .header__auth, .header__main {
    @apply flex-1;
    @apply mb-4;
  }
  .header__auth {
    @apply pb-1;
  }
  .brand__logo {
    @apply h-14 w-14;
    @apply p-2;
    @apply bg-orange-100 rounded;
    @apply mr-1;
  }
  .brand__name {
    @apply font-semibold;
    @apply text-[2rem];
  }
  ._separator {
    @apply mx-1;
    @apply text-sm;
    @apply inline-block;
  }
  .header__auth a {
    @apply hover:text-orange-200;
  }
</style>
