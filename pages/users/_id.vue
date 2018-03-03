<template>
  <section>
    <h3>User</h3>
    <p>User ID: {{ user.id }}</p>
    <p>Name: {{ user.name }}</p>
  </section>
</template>
<script>
export default {
  async fetch({ store, params }) {
    const userId = Number.parseInt(params.id, 10)
    await store.dispatch('users/getOne', userId)
    await store.dispatch('users/activate', userId)
  },
  computed: {
    user() { return this.$store.getters['users/active'] },
  },
  activated() { console.log('User: activated') },
  deactivated() { console.log('User: deactivated') },
  beforeUpdate() { console.log('User: beforeUpdate' )},
  updated() { console.log('User: updated' )},
  beforeDestroy() { console.log('User: beforeDestroy' )},
  destroyed() { console.log('User: destroyed' )},
}
</script>