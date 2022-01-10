<template>
  <div>
    <!-- the 'content' class will be placed in this div -->
    <AuthForm formTitle="Sign Up" linkTo="Log In"/>
  </div>
</template>
<script>
import LabeledInput from '~/components/forms/LabeledInput.vue'
import AuthForm from '~/components/forms/AuthForm.vue'
export default {
  name: 'signup',
  layout: 'StoreAdminLayout',
  components: {
    LabeledInput,
    AuthForm,
  },
}
</script>
