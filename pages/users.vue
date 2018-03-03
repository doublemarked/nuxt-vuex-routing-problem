<template>
  <div>
    Breadcrumbs: 
    <nuxt-link to="/users">All Users </nuxt-link>
    <span v-if="user">&raquo; {{ user.name }}</span>
    <hr />
    <nuxt-child />
  </div>
</template>
<script>
export default {
  computed: {
    user() { return this.$store.getters['users/active'] },
  },
}
</script>