<template>
  <form
    action=""
    aria-roledescription="Search"
    role="Search"
    class="search-bar"
  >
    <input
      type="text"
      :aria-label="suggestion"
      aria-controls="search-bar"
      autocomplete="search-bar"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      @click="$emit('focus')"
      @change="$emit('change')"
      :placeholder="suggestion"
      class="search-bar__input"
    />
    <button class="search-bar__btn" type="button" role="Search button" aria-roledescription="Search button">
      <IconSearch class="search-bar__icon-search" />
    </button>
  </form>
</template>
<script>
import IconSearch from '~/components/icons/IconSearch.vue'
export default {
  name: 'SearchBar',
  components: {
    IconSearch,
  },
  data() {
    return {
      suggestion: 'Search',
    }
  },
}
</script>
<style>
.search-bar {
  @apply relative;
  @apply text-gray-800;
  @apply flex-grow;
  @apply max-w-xl;
}
.search-bar__input {
  @apply block;
  @apply w-full;
  @apply h-12;
  @apply pl-4 pr-12 py-2;
  @apply rounded;
  @apply shadow;
}
.search-bar__btn {
  @apply absolute right-0 top-0;
  @apply m-[3px] py-[14px] px-[24px];
  @apply bg-orange-600;
  @apply rounded;
}
.search-bar__icon-search {
  @apply h-[14px] w-[14px];
  @apply text-orange-100;
}
</style>
