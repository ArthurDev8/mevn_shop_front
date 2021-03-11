import { getProduct, getProducts } from "../services/products.services";

export default {
  state: {
    product: {},
    products: [],
    productError: null,
  },
  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProductError(state, error) {
      state.productError = error;
    },
  },
  actions: {
    async fetchProduct({ commit }, id) {
      try {
        const product = await getProduct(id);
        commit("setProduct", product);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const products = await getProducts();
        commit("setProducts", products);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    product: ({ product }) => product,
    products: ({ products }) => products,
    productError: ({ productError }) => productError,
  },
};
