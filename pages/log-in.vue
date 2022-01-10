<template>
  <!-- the 'content' class will be placed in the div below -->
  <div>
    <form 
      class="store-admin__form" 
      :action="next"
      name="login"
      id="login"
    >
      <p class="store-admin__instruction">Log in (or sign up) using:</p>
      <NuxtLink :to="googleOauth" class="log-in__oauth-link oauth-google">Google</NuxtLink>
      <NuxtLink :to="facebookOauth" class="log-in__oauth-link oauth-facebook">Facebook</NuxtLink>
      <NuxtLink :to="appleOauth" class="log-in__oauth-link oauth-apple">Apple</NuxtLink>
    </form>
    <p>By using Tenpoint, you agree with our <NuxtLink to="/terms-and-conditions" class="store-admin__link">terms and conditions</NuxtLink> and <NuxtLink to="/privacy-policy" class="store-admin__link">privacy policy</NuxtLink>
  </div>
</template>
<script>
import LabeledInput from '~/components/forms/LabeledInput.vue'
import AuthForm from '~/components/forms/AuthForm.vue'
export default {
  name: 'login',
  layout: 'StoreAdminLayout',
  components: {
    LabeledInput,
    AuthForm,
  },
  beforeMount() {
    this.$store.commit('meta/title', this.title)
  },
  data() {
    return {
      title: "Log in",
      googleOauth: "",
      facebookOauth: "",
      appleOauth: "",
    }
  },
  computed: {
    next() {
      //* Todo: get '?next' parameter from url *//
    },
  },
}
</script>
<style>
  /* .log-in__oauth-link {
  }
  .oauth-google {
  }
  .oauth-facebook {
  }
  .oauth-apple {
   } */
</style>

