<template>
  <div class="reminder__wrapper">
    <div class="reminder__item reminder__free">
      <h2 class="reminder__text">Are you selling or leasing used items?</h2>
      <NuxtLink to="p/new" class="reminder__link">
        + Free listing
      </NuxtLink>
    </div>
    <div class="reminder__item  reminder__merchant">
      <h2 class="reminder__text">Are you a business or enterprise?</h2>
      <NuxtLink to="pricing" class="reminder__link">
        View pricing and benefits >
      </NuxtLink>
  </div>
</div>
</template>
<script>
export default {
  name: 'SellReminder'
}
</script>
<style scoped>
  .reminder__wrapper {
    @apply flex justify-between;
    @apply border border-gray-200 shadow-sm bg-white;
    @apply rounded;
  }
  .reminder__text{
    @apply mb-4;
    @apply font-semibold;
  }
  .reminder__item {
    @apply px-8 py-16;
    @apply w-full;
    @apply text-center;
  }
  .reminder__merchant .reminder__link{
    @apply border border-orange-500;
    @apply text-orange-600 hover:text-yellow-900;
    @apply bg-white hover:bg-orange-200;
  }
  .reminder__merchant {
    @apply bg-orange-100;
  }
  .reminder__free .reminder__link {
    @apply bg-orange-600;
    @apply text-orange-100;
    @apply hover:bg-orange-700;
  }
  .reminder__link {
    @apply font-semibold;
    @apply mb-2 pt-2 pb-3 px-4;
    @apply rounded;
    @apply shadow-md;
  }
</style>
