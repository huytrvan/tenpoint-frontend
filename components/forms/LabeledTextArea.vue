<template>
  <div class="labeled-text">
    <label class="labeled-text__label" :for="textName">{{ textLabel }}</label>
    <slot name="HelpToolTip"> </slot>
    <textarea 
      :name="textName" 
      :id="textName" 
      @change="handleInputFormat"
      class="labeled-text__textarea"
      ref="text"
      rows="5"
    >{{ textData }}</textarea>
    <slot name="InputDescription"> </slot>
    <span class="labeled-input__error" v-if="textFormatError">{{
      textErrorMsg
    }}</span>
  </div>
</template>
<script>
export default {
  name: 'LabeledInput',
  props: [
    'textName',
    'textLabel',
    'textData',
    'textErrorMsg',
    'validationCallback',
  ],
  emits: ['textUpdated', 'validationUpdated'],
  data() {
    return {
      textFormatError: false,
      showPasswordText: 'show',
    }
  },
  methods: {
    handleInputFormat($event) {
      const value = $event.target.value
      this.textFormatError = !this.validationCallback(value)
      // send up to parent
      this.$emit('textUpdated', value)
      this.$emit('validationUpdated', this.textFormatError)
    },
  },
}
</script>
<style>
.labeled-text {
  @apply mb-6;
  @apply relative;
}
.labeled-text__label {
  @apply ml-1;
}
.labeled-text__textarea {
  @apply pl-3 py-3 pr-12;
  @apply -mb-1 mt-0.5;
  @apply w-full;
  @apply border border-orange-300 focus:border-orange-600;
  @apply focus:outline-none;
  @apply rounded;
  @apply shadow-sm focus:shadow;
}
.labeled-text__error {
  @apply text-red-600;
  @apply text-sm;
  @apply font-semibold;
}
</style>