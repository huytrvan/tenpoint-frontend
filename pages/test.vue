<template>
<div class="">
  <LabeledInput inputName="test" inputType="email" inputLabel="Test email" inputErrorMsg="Not a valid email!" :validationCallback="validateEmailFormat"/>
</div>
</template>
<script>
import LabeledInput from '../components/forms/LabeledInput.vue'
export default {
  name: 'Test',
  components: {
    LabeledInput
  },
  data() {
    return {
    }
  },
  methods: {
    validateEmailFormat(value) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    },
  }
}
</script>
