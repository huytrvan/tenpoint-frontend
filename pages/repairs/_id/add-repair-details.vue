<template>
  <form
    class="store-admin__form"
    id="addRepairDetails"
    name="addRepairdDetails"
    :action="nextStep"
  >
    <LabeledInput
      inputName="itemName"
      inputType="text"
      inputLabel="Item Name"
      inputData="itemName"
      inputErrorMsg="This is a required field"
      validationCallback="validateInputNotEmpty"
    />
  </form>
</template>
<script>
import LabeledInput from '/components/forms/LabeledInput.vue'
export default {
  /* Note: the styles for this file is from the layout */
  layout: 'StoreAdminLayout',
  components: [LabeledInput],
  beforeMount() {
    // Add title to global store
    this.$store.commit('meta/updateTitle', this.title)
  },
  data() {
    return {
      title: 'Add Repair Details',
      itemName: '',
    }
  },
  computed: {
    titleStore() {
      return this.$store.state.meta.title
    },
    nextStep() {
      //* Todo: find method to get user verify status *//
      const isUserVerified = false
      if (isUserVerified) {
        return '/repairs/' //go to repair index
      } else {
        return '/2-complete-profile'
      }
    },
  },
  methods: {
    validateInputNotEmpty(value) {
      return value.length > 0
    },
  },
}
</script>