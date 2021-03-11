import { getPaymentIntent } from "@/services/payment.services";
import { sum } from "ramda";

export default {
  state: {
    cart: {
      total: 0,
    },
    cartItems: [],
    paymentError: null,
  },
  mutations: {
    addToCart(state, product) {
      state.cartItems.push(product);
      state.cart.total += product.price;
    },
    deleteFromCart(state, product) {
      const idx = state.cartItems.findIndex(({ _id }) => {
        return _id === product._id;
      });
      state.cartItems.splice(idx, 1);
      state.cart.total -= product.price;
    },
    setPaymentError(state, error) {
      state.paymentError = error;
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    async handleBuy({ getters, commit }, form) {
      try {
        const intent = await getPaymentIntent({
          amount: getters.cartTotalPrice,
          ...form,
        });
        return intent;
      } catch (error) {
        commit("setPaymentError", error);
      }
    },
  },
  getters: {
    cart: ({ cart }) => cart,
    cartTotalPrice: ({ cartItems }) => sum(cartItems.map((item) => item.price)),
    cartCount: ({ cartItems }) => cartItems.length,
    cartItems: ({ cartItems }) => cartItems,
    paymentError: ({ paymentError }) => paymentError,
  },
};
