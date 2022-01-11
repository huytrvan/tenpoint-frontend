<template>
  <form
    class="store-admin__form"
    id="findRepairService"
    name="findRepairService"
    :action="nextStep"
  >
    <!-- Todo: add tool tips pop up -->
    <LabeledInput
      inputName="repairItem"
      inputType="text"
      inputLabel="Repair Item"
      inputData="repairItem"
      inputErrorMsg="This is a required field"
      validationCallback="validateInputNotEmpty"
    >
      <HelpToolTip>
        <ul>
          <li>What is the item called?</li>
          <li>What is the model, variant or year of production?</li>
        </ul>
      </HelpToolTip>
    </LabeledInput>
    <CategoryPicker categoryData="repairCategory" />
    <!-- Todo: make category picker, which is search field -->
    <div class="store-admin__form-section">
      <label class="store-admin__form-label">Item appearance</label>
      <UploadImages
        :max="10"
        maxError="Max upload: 10 images"
        clearAll="Remove all images"
        uploadMsg="Click or drop here to upload images"
        class="store-admin__form-upload"
      />
    </div>
    <LabeledTextArea
      textName="repairDescription"
      textLabel="Description"
      textErrorMsg="This is a required field"
      validationCallback="validateInputNotEmpty"
    >
      <HelpToolTip>
        <p>
          Be descriptive: it saves time by letting our technicians identify the
          issue and prepare sooner.
        </p>
        <p>Try answer:</p>
        <ul>
          <li>What issue do you have?</li>
          <li>What model and how long have you been using it?</li>
          <li></li>
          <li>What did you do before it broke?</li>
          <li></li>
          <li>Any strange noise, smell or deformity?</li>
          <li></li>
          <li>etc.</li>
        </ul>
      </HelpToolTip>
    </LabeledTextArea>
    <LabeledSelect
      selectLabel="Pick a date"
      :selectName="repairDate"
      :selectData="repairDateOptions"
    >
      <HelpToolTip>
        <p>
          Our professional technician will come to diagnose your item and
          provide further pricing details. See “<NuxtLink
            to="/faq/how-repair-service-works"
            >How repair service works?</NuxtLink
          >'.
        </p>
        <p><strong>Limited time offer</strong></p>
        <p></p>
        <p>You can get discounts for different scheduling:</p>
        <ul>
          <li>Today: 0% off</li>
          <li>Tomorrow: 2% off</li>
          <li>Anyday within 1 week: 10% off</li>
        </ul>
      </HelpToolTip>
      <div class="store-admin__instruction">
        <p class>Weekdays & Saturday: 6pm - 9pm</p>
        <p>Sunday: 9am - 6pm</p>
        <p>Not available on <a href="">Vietnam's national holidays</a></p>
      </div>
    </LabeledSelect>
    <EstimatedPricing />
  </form>
</template>
<script>
import LabeledInput from '/components/forms/LabeledInput.vue'
import LabeledTextArea from '/components/forms/LabeledTextArea.vue'
import LabeledSelect from '/components/forms/LabeledSelect.vue'
import HelpToolTip from '/components/forms/HelpToolTip.vue'
import UploadImages from 'vue-upload-drop-images'
import CategoryPicker from '/components/forms/CategoryPicker.vue'
import EstimatePricing from 'components/forms/EstimatedPricing.vue'
export default {
  /* Note: the styles for this file is from the layout */
  layout: 'StoreAdminLayout',
  components: [
    LabeledInput,
    LabeledTextArea,
    HelpToolTip,
    EstimatePricing,
    UploadImages,
    CategoryPicker,
    LabeledSelect,
    EstimatedPricing,
  ],
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
      repairDateOptions: ['Today', 'Tomorrow', 'Any day within 1 week'],
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
