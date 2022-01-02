<template>
  <div> <!-- the 'content' class will be placed in this div -->
    <div class="form__wrapper">
      <form action="./" @submit="handleFormSubmit" method="POST" id="login">
        <h1 class="form__title">Log in</h1>
        <div class="form__username" :style="formatErrors.username ? 'margin-bottom: 0.5rem;' : ''">
          <input
            type="text"
            v-model="username"
            @blur="handleUsernameFormat"
            name="username"
            id="username"
            placeholder="Email or Phone number">
          <span class="form__error-username" v-show="formatErrors.username">Please enter valid email or phone number</span>
        </div>
        <div class="form__password" :style="formatErrors.password ? 'margin-bottom: 0.5rem;' : ''">
          <input
            type="password"
            v-model="password"
            @blur="handlePasswordFormat"
            name="password"
            id="password"
            placeholder="Password">
          <span class="form__error-password" v-show="formatErrors.password">Please enter valid password (minimum 6 characters)</span>
        </div>
        <input type="submit" :style="(formatErrors.username || formatErrors.password) ? 'cursor: not-allowed' : ''" value="Log in" id="submit">
      </form>
      <div class="form__new-user">
        <p>Don't have an account? <a class="form__signup-link" href="/signup">Sign up</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      username: '',
      password: '',
      formatErrors: {
        username: false,
        password: false
      }
    }
  },
  methods: {
    validateEmailFormat(value) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    },
    validatePhoneFormat(value) {
      const re = /^\d{10}$/;
      return re.test(String(value).toLowerCase());
    },
    handleUsernameFormat() {
      // Our username can be email or phone number
      const isUsernameWrongFormat = (
        this.validateEmailFormat(this.username) || this.validatePhoneFormat(this.username)
      ) ? false : true;
      this.formatErrors.username = isUsernameWrongFormat;
    },
    handlePasswordFormat() {
      // Valid password must be at least 6 characters long
      const isPasswordWrongFormat = this.password.length < 6 ? true : false;
      this.formatErrors.password = isPasswordWrongFormat;
    },
    handleFormSubmit(element) {
      // If no errors, submit the form
      const isFormValid = !(
        this.formatErrors.username || this.formatErrors.password
      );
      if (isFormValid) {
        return true;
      } else {
        element.preventDefault();
      }
    }
  }
}
</script>
<style>
  .form__wrapper {
    @apply py-8 px-10;
    @apply bg-white;
    @apply border border-slate-200;
    @apply shadow;
    @apply rounded;
    @apply max-w-md;
    @apply mx-auto;
  }
  #login {
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
  #username, #password {
    @apply p-3;
    @apply -mb-1;
    @apply w-full;
    @apply border border-orange-200 focus:border-orange-600;
    @apply focus:outline-none;
    @apply rounded;
    @apply shadow-sm focus:shadow;
  }
  .form__username, .form__password {
     @apply mb-8;
  }
  #submit {
    @apply p-3 mt-3;
    @apply w-full;
    @apply bg-orange-500;
    @apply text-white;
    @apply hover:bg-orange-600;
    @apply hover:cursor-pointer;
    @apply uppercase;
    @apply rounded;
  }
  .form__error-username, .form__error-password {
    @apply text-red-600;
    @apply text-sm;
    @apply font-semibold;
  }
  .form__signup-link {
    @apply text-orange-700 hover:text-orange-800;
    @apply ml-0.5;
  }
</style>
