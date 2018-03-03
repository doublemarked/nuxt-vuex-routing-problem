# Instructions

1. `git clone && npm install && npm run dev`
2. In your browser, navigate to `http://localhost:3000/users`
3. Click on a User.
4. Click on the "User Index" link.
5. Observe error: `Cannot read property 'id' of undefined`

# Analysis

Vuex is tracking the current user in a state key called `activated`. This state is mutated from fetch() on page load: on the index (pages/users/index.vue) it is set to `null`, and on the individual user page (pages/users/_id.vue) it is set to the id found in the params. 

When traversing from the single user page to the index via route modification (i.e. `<nuxt-link>` or router.push()), the `fetch()` method on the index is called before the `_id` component is unloaded. The `activated` key is mutated to null, causing the `_id` component to re-render and crash due to missing an active user. 

Why is the `_id` component still loaded when the `index` component's `fetch()` is called?
