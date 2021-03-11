<template>
  <div id="app">
    <Header :categories="categories" :cartCount="cartCount"/>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header: () => import("@/components/layouts/Header"),
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      categories: "categories",
      cartCount: "cartCount",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "fetchCategories",
    }),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
<style lang="scss" scoped>
body,
html {
  padding: 0;
  margin: 0;
}
#app {
  margin: 0 auto;
}
</style>
