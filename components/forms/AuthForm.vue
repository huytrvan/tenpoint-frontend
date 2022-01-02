<template>
  <div>
    <!-- the 'content' class will be placed in this div -->
    <div class="form__wrapper">
      <form
        action="./"
        @submit="handleFormSubmit"
        method="POST"
        :id="formTitle.toLowerCase().replace(' ', '')"
        class="form"
      >
        <h1 class="form__title">{{formTitle}}</h1>
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
          :inputLabel="passwordLabel"
          inputErrorMsg="Please enter a valid password (minimum 6 characters)"
          :validationCallback="validatePasswordFormat"
          :inputData="password"

          @inputUpdated="password = $event"
          @validationUpdated="formatErrors.password = $event"
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
          :value="submitLabel"
          id="submit"
          class="form__submit"
        />
      </form>
      <div class="form__additionalLinks">
        <p>
          <NuxtLink to="/forgot-password" class="form__forgotPasswordLink" v-if="isLoginPage">Forgot password?</NuxtLink>
        </p>
        <p>
          {{ questionText }}
          <NuxtLink class="form__link" :to="'/' + linkTo.toLowerCase().replace(' ', '')">{{linkTo}}</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import LabeledInput from '~/components/forms/LabeledInput.vue'
export default {
  name: 'AuthForm',
  layout: 'auth-layout',
  components: {
    LabeledInput,
  },
  props: ['formTitle', 'linkTo'],
  data() {
    return {
      email: '',
      password: '',
      formatErrors: {
        email: false,
        password: false,
      },
    }
  },
  computed: {
    isFormValid() {
      return (
        this.formatErrors.email === false &&
        this.email.length > 0 &&
        this.formatErrors.password === false &&
        this.password.length > 0
      )
    },
    isLoginPage() {
      return this.formTitle === 'Log In'
    },
    passwordLabel() {
      return this.isLoginPage ? 'Password' : 'Password (minimum 6 characters)'
    },
    submitLabel() {
      return this.isLoginPage ? 'Log in' : 'Sign up with email'
    },
    questionText() {
      return this.isLoginPage ? 'Don\'t have an account?' : 'Already have an account?'
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
  },
}
</script>
<style>
.form__wrapper {
  @apply py-8 px-10;
  @apply bg-white;
  @apply border border-gray-200;
  @apply shadow;
  @apply rounded;
  @apply max-w-md;
  @apply mx-auto;
}
.form {
  @apply w-full;
  @apply mx-auto mb-10;
}
.form__additionalLinks {
  @apply text-center;
}
.form__title {
  @apply text-2xl;
  @apply font-semibold;
  @apply mb-8;
  @apply text-center;
}
.form__submit {
  @apply p-3 mt-4;
  @apply w-full;
  @apply bg-orange-500;
  @apply text-white;
  @apply hover:bg-orange-600;
  @apply hover:cursor-pointer;
  @apply uppercase;
  @apply rounded;
}
.form__link, .form__forgotPasswordLink {
  @apply text-orange-700 hover:text-orange-800;
  @apply ml-0.5;
}
.form__forgotPasswordLink {
  @apply mb-2;
}
</style>
