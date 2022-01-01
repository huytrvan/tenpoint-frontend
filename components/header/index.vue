<template>
  <header class="">
    <NuxtLink to="./">
      <img :src="require('~/static/tenpoint-logo.svg')" alt="" class="logo">
    </NuxtLink>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  .logo {
    @apply h-16 w-20 mr-2;
  }
</style>
