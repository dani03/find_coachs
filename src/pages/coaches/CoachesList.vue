<template>
  <section>Filter</section>

  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register"> Register a coach </router-link>
      <router-link to="/coaches/id/contact"> contact coach </router-link>
    </div>

    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>not found coaches</h3>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
