<template>
  <header class="header">
    <div class="header__wrapper">
      <TenpointLogoLight class="header__logo" />
      <div class="header__search w-full"></div>
      <NuxtLink
        @mouseenter="operatorHover"
        @mouseleave="isOperatorHover = false"
        to=""
        class="header__operator"
      >
        <IconServiceProvider
          :class="[
            'header__operator-icon',
            isOperatorHover ? 'bg-orange-200' : '',
          ]"
        />
        <span class="header__operator-text">
          Find repair service
        </span>
      </NuxtLink>
      <NuxtLink to="" class="header__account">
        <IconAccount class="header__account-icon" />
        <span class="header__account-text">
          Sign in/ Sign up
        </span>
      </NuxtLink>
      <div class="header__language">
        <IconLangEnglish class="header__lang-icon" />
        <IconArrowDown class="header__lang-arrow-icon" />
      </div>
    </div>
  </header>
</template>
<script>
import TenpointLogoLight from '~/components/headers/commons/TenpointLogoLight.vue'
import IconServiceProvider from '~/components/icons/IconServiceProvider.vue'
import IconLangEnglish from '~/components/icons/IconLangEnglish.vue'
import IconArrowDown from '~/components/icons/IconArrowDown.vue'
import IconAccount from '~/components/icons/IconAccount.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import SearchBar from '~/components/headers/commons/SearchBar.vue'
export default {
  name: 'StoreFrontHeader',
  components: {
    TenpointLogoLight,
    SearchBar,
    IconServiceProvider,
    IconLangEnglish,
    IconArrowDown,
    IconAccount,
    IconPlus,
  },
  data() {
    return {
      isOperatorHover: false,
    }
  },
  methods: {
    operatorHover() {
      console.log('operatorHover')
    },
  },
}
</script>
<style>
.header {
  @apply p-2 md:px-20;
  @apply shadow-sm;
  @apply bg-orange-600;
  @apply text-orange-100;
}
/* Keep header in max-width */
.header__wrapper {
  max-width: 1320px;
  @apply mx-auto;
  @apply grid grid-cols-12 gap-2 md:gap-0 content-center grid-rows-1;
}
.header__language {
  @apply col-span-1;
  @apply mt-auto;
  @apply order-6;
}
.header__logo {
  @apply col-span-2 md:order-1;
}
.header__operator {
  @apply col-span-5;
}
.header__account {
  @apply col-span-4;
}
.header__operator,
.header__account {
  @apply md:col-span-3 lg:col-span-2;
  @apply text-xs md:text-sm md:order-3;
}
.header__search {
  @apply col-span-11 md:col-span-3 lg:col-span-5;
  @apply order-5 md:order-2 hidden md:block;
}
.header__operator,
.header__account,
.header__language {
  @apply text-center;
  @apply hover:text-orange-200;
}
.header__operator,
.header__account,
.header__search {
  @apply mt-auto;
}

.header__lang-icon {
  @apply max-w-[1.25rem] lg:max-w-[1.5rem] rounded;
  @apply border border-orange-500 shadow;
  @apply mx-auto mb-[-10px];
  @apply opacity-[0.75]
}
.header__lang-arrow-icon {
  @apply h-2 w-2;
  @apply text-orange-100;
  @apply inline mx-auto;
}

/* Add Plus icon to operator icon */
.header__operator {
  @apply relative;
}
.header__operator-plus-icon {
  @apply absolute;
  @apply top-[16%] md:top-[10%] left-[74%] md:left-[58%];
  @apply w-2 h-2;
}
.header__account-icon {
  @apply h-8 w-8;
  @apply mx-auto;
}
.header__operator-icon {
  @apply h-8 w-8;
  @apply p-[1.5px];
  @apply mx-auto;
  @apply shadow;
  @apply bg-orange-100 hover:bg-orange-200 text-orange-600 stroke-2;
  @apply rounded-full;
}
</style>
