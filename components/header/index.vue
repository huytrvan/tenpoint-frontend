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
    @apply h-4 w-4 mr-2;
  }
</style>
