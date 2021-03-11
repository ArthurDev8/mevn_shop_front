import Vue from "vue";
import Vuex from "vuex";
import product from "./product";
import category from "./category";
import cart from "./cart";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product,
    category,
    cart
  },
});
