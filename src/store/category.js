import { getCategory, getCategories } from "../services/category.services";

export default {
  state: {
    category: {},
    categories: [],
    categoryError: null,
  },
  mutations: {
    setCategory(state, category) {
      state.category = category;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCategoryError(state, error) {
      state.categoryError = error;
    },
  },
  actions: {
    async fetchCategory({ commit }, id) {
      try {
        const category = await getCategory(id);
        commit("setCategory", category);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const categories = await getCategories();
        commit("setCategories", categories);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    category: ({ category }) => category,
    categories: ({ categories }) => categories,
    categoryError: ({ categoryError }) => categoryError,
  },
};
