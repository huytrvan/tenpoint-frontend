<template>
  <div>
    <!-- the 'content' class will be placed in this div -->
    <AuthForm formTitle="Log In" linkTo='Sign Up'/>
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
}
</script>
