<template>
  <div class="labeled-select">
    <label class="labeled-select__label" :for="selectName">{{ selectLabel }}</label>
    <div class="labeled-select__help-tooltip">
      <slot name="HelpToolTip"> </slot>
    </div>
    <select
      :value="selectData"
      @change="handleSelectChange"
      :name="selectName"
      :id="selectName"
      class="labeled-select__select"
      ref="select"
    >
      <option v-for="option, index in selectOptions" :value="option" :key="index" class="labeled-select__option" :selected="index == 0">{{ option }}</option>
    </select>
    <div class="labeled-select__select-description">
      <slot name="SelectDescription"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabeledSelect',
  props: [
    'selectName',
    'selectLabel',
    'selectOptions',
    'selectData',
  ],
  emits: ['selectUpdated'],
  data() {
    return {
    }
  },
  methods: {
    handleSelectChange($event) {
      const value = $event.target.value
      // send up to parent
      this.$emit('selectUpdated', value)
    },
  },
}
</script>
<style>
.labeled-select {
  @apply mb-6;
  @apply relative;
}
.labeled-select__label {
  @apply ml-1;
}
.labeled-select__select {
  @apply pl-3 py-3 pr-12;
  @apply mt-0.5;
  @apply w-full;
  @apply border border-orange-300 focus:border-orange-600;
  @apply focus:outline-none;
  @apply rounded;
  @apply shadow-sm focus:shadow;
  @apply bg-white;
}
.labeled-select__option {
  @apply pl-4;
}
.labeled-select__help-tooltip {
  @apply inline-block
}
.labeled-select__select-description > * {
  @apply text-sm;
  @apply text-gray-500;
}
.labeled-select__select-description a {
  @apply underline hover:text-orange-600;
}
</style>