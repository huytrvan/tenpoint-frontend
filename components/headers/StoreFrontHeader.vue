<template>
  <header class="header">
    <div class="header__auth">
      <div class="header__seller-auth">
        <NuxtLink to="login?next=https://localhost:3000" class="">
          <span>My Seller page</span>
        </NuxtLink>
        <span class="_separator">|</span>
        <NuxtLink
          to="login?next=https://localhost:3000"
          class="header__freeListingBtn"
        >
          <span>+ Free listing</span>
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
      <TenpointLogoLight />
      <SearchBar />
    </div>
  </header>
</template>
<script>
import TenpointLogoLight from '~/components/headers/commons/TenpointLogoLight.vue'
import SearchBar from '~/components/headers/commons/SearchBar.vue'
export default {
  name: 'StoreFrontHeader',
  components: {
    TenpointLogoLight,
    SearchBar,
  },
}
</script>
<style>
.header {
  @apply py-1 px-20 shadow-sm;
  @apply bg-orange-600;
  @apply text-orange-100;
}
.header__auth,
.header__main {
  @apply flex justify-between items-center;
}
/* Keep header in max-width */
.header__auth,
.header__main {
  max-width: 1320px;
  @apply mx-auto;
}
.header__auth,
.header__main {
  @apply flex-1;
  @apply mb-4;
}
.header__auth {
  @apply pb-1;
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
