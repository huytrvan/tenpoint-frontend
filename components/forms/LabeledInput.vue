<template>
  <div
    class="labeledInput__wrapper"
  >
    <label :for="inputName">{{ inputLabel }}</label>
    <input
      :type="inputType"
      :value="inputData"
      @blur="handleInputFormat"
      :name="inputName"
      :id="inputName"
      class="labeledInput__input"
      ref="input"
    />
    <button v-if="inputType === 'password'" class="labeledInput__showPasswordBtn" @click="togglePasswordVisibility" :style="inputFormatError ? 'top: 33%;' : ''">{{showPasswordText}}</button>
    <span class="labeledInput__error" v-if="inputFormatError">{{
      inputErrorMsg
    }}</span>
  </div>
</template>
<script>
export default {
  name: 'LabeledInput',
  props: [
    'inputName',
    'inputType',
    'inputLabel',
    'inputData',
    'inputErrorMsg',
    'validationCallback',
  ],
  emits: ['inputUpdated', 'validationUpdated'],
  data() {
    return {
      inputFormatError: false,
      showPasswordText: 'show',
    }
  },
  methods: {
    handleInputFormat($event) {
      const value = $event.target.value
      this.inputFormatError = !this.validationCallback(value)
      // send up to parent
      this.$emit('inputUpdated', value)
      this.$emit('validationUpdated', this.inputFormatError)
    },
    togglePasswordVisibility(element) {
      element.preventDefault()
      const input = this.$refs.input;
      const currentInputType = input.getAttribute('type');
      if (currentInputType === 'password') {
        input.setAttribute('type', 'text');
        this.showPasswordText = 'hide';
      } else {
        input.setAttribute('type', 'password');
        this.showPasswordText = 'show';
      }

    },
  },
}
</script>
<style>
.labeledInput__wrapper {
  @apply mb-6;
  @apply relative;
}
.labeledInput__input {
  @apply pl-3 py-3 pr-12;
  @apply -mb-1;
  @apply w-full;
  @apply border border-orange-200 focus:border-orange-600;
  @apply focus:outline-none;
  @apply rounded;
  @apply shadow-sm focus:shadow;
}
.labeledInput__showPasswordBtn {
  @apply absolute;
  @apply top-[44%];
  @apply right-0;
  @apply p-2;
  @apply cursor-pointer;
  @apply text-gray-400 text-sm;
}
.labeledInput__error {
  @apply text-red-600;
  @apply text-sm;
  @apply font-semibold;
}
</style>
