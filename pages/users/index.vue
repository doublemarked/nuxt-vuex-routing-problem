<template>
  <section>
    <h3>Users Index</h3>
    <ul>
      <li v-for="u of users" :key="u.id"><nuxt-link :to="`/users/${u.id}`">{{ u.name }}</nuxt-link></li>
    </ul>
  </section>
</template>
<script>
export default {
  async fetch({ store }) {
    console.log('Index: fetch')
    // This mutation will cause the _id component to re-render and crash.
    // Why is the _id component still even around to be re-rendered?
    await store.dispatch('users/activate', null)
    await store.dispatch('users/getAll')
  },
  computed: {
    users() { return this.$store.getters['users/list'] },
  },
}
</script>