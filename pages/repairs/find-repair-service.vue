<template>
  <form
    class="store-admin__form"
    id="findRepairService"
    name="findRepairService"
    :action="nextStep"
  >
    <!-- Todo: add tool tips pop up -->
    <LabeledInput
      :inputName="repairItem"
      inputType="text"
      inputLabel="Item To Repair"
      :inputData="repairItem"
      inputErrorMsg="This is a required field"
      :validationCallback="validateInputNotEmpty"
      class="store-admin__form-section"
      @inputUpdated="repairItem = $event"
      @validationUpdated="formatErrors.repairItem = $event"
    >
      <template slot="HelpToolTip">
        <HelpToolTip>
          <p>These questions may help you:</p>
          <ul>
            <li>What is the item called?</li>
            <li>What is the model, variant or year of production?</li>
          </ul>
        </HelpToolTip>
      </template>
    </LabeledInput>
    <LabeledTextArea
      :textName="repairDescription"
      textLabel="Description"
      textErrorMsg="This is a required field"
      :validationCallback="validateInputNotEmpty"
      class="store-admin__form-section"
      @inputUpdated="repairDescription = $event"
      @validationUpdated="formatErrors.repairDescription = $event"
    >
      <template slot="HelpToolTip">
        <HelpToolTip>
          <p>Be descriptive:</p>
          <ul>
            <li>What issue do you have?</li>
            <li>What did you do before it broke?</li>
            <li>How long have you been using it?</li>
            <li>Any strange noise, smell or malfunctionality?</li>
            <li>etc.</li>
          </ul>
          <p class="small-note">Our technician will appreciate it! ;)</p>
        </HelpToolTip>
      </template>
    </LabeledTextArea>
    <LabeledSelect
      selectLabel="Schedule checkup date"
      :selectName="repairDate"
      :selectData="repairDate"
      :selectOptions="repairDateOptions"
    >
    <template slot="HelpToolTip">
      <HelpToolTip>
        <p>
          Pick a date for professional checkup and
          get on-site pricing.</p>
        <p><strong>Discounts available</strong>(*):</p>
        <ul>
          <li>Book 'Today': 0% off</li>
          <li>Book 'Tomorrow': -2% off</li>
          <li>Book 'Within 3 - 7 days': -10% off</li>
        </ul>
        <p class="small-note">* Limited time offer only</p>
      </HelpToolTip>
    </template>
      <template slot="SelectDescription">
        <ul>
        <li>Weekdays & Saturday: 6pm - 9pm</li>
        <li>Sunday: 9am - 9pm</li>
        <li>Not available on <a href="">Vietnam's national holidays</a></li>
        </ul>
      </template>
    </LabeledSelect>
  </form>
</template>
<script>
import LabeledInput from '/components/forms/LabeledInput.vue'
import LabeledTextArea from '/components/forms/LabeledTextArea.vue'
import LabeledSelect from '/components/forms/LabeledSelect.vue'
import HelpToolTip from '/components/forms/HelpToolTip.vue'
// import UploadImages from 'vue-upload-drop-images'
// import CategoryPicker from '/components/forms/CategoryPicker.vue'
// import EstimatePricing from 'components/forms/EstimatedPricing.vue'
export default {
  /* Note: the styles for this file is from the layout */
  layout: 'StoreAdminLayout',
  components: {
    LabeledInput,
    LabeledTextArea,
    HelpToolTip,
    // EstimatePricing,
    // UploadImages,
    // CategoryPicker,
    LabeledSelect,
    // EstimatedPricing,
  },
  beforeMount() {
    // Add title to global store
    this.$store.commit('meta/updateTitle', this.title)
  },
  data() {
    return {
      title: 'Find Repair Service',
      repairItem: '',
      repairCategory: {},
      repairDescription: '',
      repairDateOptions: ['Today', 'Tomorrow (-2% off)', 'Within 3 - 7 days (-10% off)'],
      repairDate: '',
      formatErrors: {
        repairItem: false,
        repairCategory: false,
        repairDescription: false,
      },
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
