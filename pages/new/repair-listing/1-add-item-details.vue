<template>
  <div class="">
    <h2 class="store-admin__title">{{ title }}</h2>
  </div>
</template>
<script>
export default {
  // class styles are from layout
  layout: 'StoreAdminLayout',
  beforeMount() {
    // Add title to global store
    this.$store.commit('meta/updateTitle', this.title)
  },
  data() {
    return {
      title: 'Add Item Details'
    }
  },
  computed: {
    titleStore() {
      return this.$store.state.meta.title
    }
  },
}
</script>