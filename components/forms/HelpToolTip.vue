<template>
  <div
    class="help-tooltip"
    @mouseover="isToggling = true"
    @mouseleave="isToggling = false"
    @focus="isToggling = true"
    @focusout="isToggling = false"
    tabindex="0"
  >
    <IconHelpTooltip class="help-tooltip__icon" />
    <div v-show="isToggling" class="help-tooltip__text-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import IconHelpTooltip from '/components/icons/IconHelpTooltip.vue'
export default {
  name: 'HelpTooltip',
  components: {
    IconHelpTooltip,
  },
  data() {
    return {
      isToggling: false,
    }
  },
}
</script>
<style>
.help-tooltip {
  @apply relative inline-block;
  @apply rounded;
}
.help-tooltip__icon {
  @apply w-3;
  @apply fill-gray-700;
}
.help-tooltip__text-wrapper {
  @apply absolute shadow-xl;
  @apply bg-gray-50;
  @apply border border-gray-200;
  @apply z-10;
  @apply px-8 py-4;
  @apply left-[-6rem] md:left-0;
}
/* Style slot */
.help-tooltip__text-wrapper > * {
  @apply min-w-[14rem] md:min-w-[16rem];
}
.help-tooltip__text-wrapper p, 
.help-tooltip__text-wrapper li {
  @apply mb-1;
}
.help-tooltip__text-wrapper li {
  @apply list-disc;
} 
.help-tooltip__text-wrapper a {
  @apply text-orange-600;
  @apply hover:text-orange-700;
}
.small-note {
  @apply text-sm;
  @apply mt-3;
  @apply italic;
}
</style>