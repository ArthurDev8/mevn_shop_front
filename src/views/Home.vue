<template>
  <div class="home">
    <div class="product-list">
      <Loader v-if="loading" />
      <ProductCard
        v-else
        v-for="(product, key) in products"
        :key="key"
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        :description="product.description"
        @addToCart="addToCart(product)"
        @deleteFromCart="deleteFromCart(product)"
        :inCart="cartItemsIds.includes(product._id)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    Loader: () => import("@/components/loader/Loader"),
    ProductCard: () => import("@/components/ProductCard"),
  },
  data: () => ({
    loading: false,
  }),
  async mounted() {
    this.loading = true;
    await this.fetchProducts();
    this.loading = false;
  },
  computed: {
    ...mapGetters({
      products: "products",
      cartItems: "cartItems",
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
    }),
    ...mapMutations({
      addToCart: "addToCart",
      deleteFromCart: "deleteFromCart",
    }),
  },
};
</script>

<style  lang='scss' scoped>
.home {
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
  }
}
</style>