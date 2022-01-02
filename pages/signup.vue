<template>
  <div>
    <!-- the 'content' class will be placed in this div -->
    <div class="form__wrapper">
      <form
        action="./"
        @submit="handleFormSubmit"
        aria-autocomplete="off"
        autocomplete="off"
        method="POST"
        id="signup"
      >
        <h1 class="form__title">Sign up</h1>
        <LabeledInput
          inputName="email"
          inputType="email"
          inputLabel="Email Address"
          inputErrorMsg="Please enter a valid email address"
          :validationCallback="validateEmailFormat"
          :inputData="email"
          @inputUpdated="email = $event"
          @validationUpdated="formatErrors.email = $event"
        />
        <LabeledInput
          inputName="password"
          inputType="password"
          inputLabel="Password (minimum 6 characters)"
          inputErrorMsg="Please enter a valid password (minimum 6 characters)"
          :validationCallback="validatePasswordFormat"
          :inputData="password"
          @inputUpdated="password = $event"
          @validationUpdated="formatErrors.password = $event"
        />
        <LabeledInput
          inputName="checkPassword"
          inputType="password"
          inputLabel="Retype Password"
          inputErrorMsg="Your passwords don't match. Please check again"
          :validationCallback="validateCheckPasswordFormat"
          :inputData="checkPassword"
          @inputUpdated="checkPassword = $event"
          @validationUpdated="formatErrors.checkPassword = $event"
        />
        <input
          type="submit"
          :style="
            isFormValid
              ? ''
              : 'cursor: not-allowed'
          "
          :title="
            isFormValid
              ? ''
              : 'Please make sure all inputs are correct to continue'"
          value="Sign up with email"
          id="submit"
        />
      </form>
      <div class="form__new-user">
        <p>
          Already have an account?
          <NuxtLink class="form__signup-link" to="/login">Log in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import LabeledInput from '../components/forms/LabeledInput.vue'
export default {
  name: 'Signup',
  layout: 'auth-layout',
  components: {
    LabeledInput,
  },
  data() {
    return {
      email: '',
      password: '',
      checkPassword: '',
      formatErrors: {
        email: false,
        password: false,
        checkPassword: false,
      },
    }
  },
  computed: {
    isFormValid() {
      return (
        this.formatErrors.email === false &&
        this.email.length > 0 &&
        this.formatErrors.password === false &&
        this.password.length > 0 &&
        this.formatErrors.checkPassword === false &&
        this.checkPassword.length > 0
      )
    },
  },
  methods: {
    handleFormSubmit(element) {
       // If no errors, submit the form
      if (this.isFormValid) {
        return true;
      } else {
        element.preventDefault();
      }
    },
    validateEmailFormat(value) {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(value).toLowerCase())
    },
    validatePasswordFormat(value) {
      // password must be at least 6 characters
      console.log(this.password)
      return value.length >= 6
    },
    validateCheckPasswordFormat(value) {
      return value === this.password
    },
  },
}
</script>
<style scoped>
.form__wrapper {
  @apply py-8 px-10;
  @apply bg-white;
  @apply border border-gray-200;
  @apply shadow;
  @apply rounded;
  @apply max-w-md;
  @apply mx-auto;
}
#signup {
  @apply w-full;
  @apply mx-auto mb-10;
}
.form__new-user {
  @apply text-center;
}
.form__title {
  @apply text-2xl;
  @apply font-semibold;
  @apply mb-8;
  @apply text-center;
}
#submit {
  @apply p-3 mt-1;
  @apply w-full;
  @apply bg-orange-500;
  @apply text-white;
  @apply hover:bg-orange-600;
  @apply hover:cursor-pointer;
  @apply uppercase;
  @apply rounded;
}
.form__error-email,
.form__error-password,
.form__error-check-password {
  @apply text-red-600;
  @apply text-sm;
  @apply font-semibold;
}
.form__signup-link {
  @apply text-orange-700 hover:text-orange-800;
  @apply ml-0.5;
}
</style>
