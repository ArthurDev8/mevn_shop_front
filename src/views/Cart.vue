<template>
  <div class="cart-container">
    <template v-if="cartCount > 0">
      <ul class="container">
        <li v-for="(item, key) in cartItems" :key="key">
          <div>{{ item.title }} - {{ item.price }}$</div>
          <img class="item-img" :src="item.imageUrl" />
          <button class="btn btn-danger" @click="deleteFromCart(item)">
            Удалить
          </button> 
        </li>
      </ul>
      <div class="panel">
        <hr />
        <div class="cartPriceInfo" v-if="!paymentIntent">
          <div>Кол-во: {{ cartCount }}</div>
          <div>Итого: {{ cartTotalPrice.toFixed(2) }}$</div>
          <UserForm @onFormSubmit="handleGetPaymentIntent" />
        </div>

        <div v-else class="cartPriceInfo">
          <Card
            class="stripe-card"
            :class="{ complete }"
            stripe="pk_test_51ID318G5zwU1fuSwPSrUreTjWabzjYapgaljs34KRhSX5GXVwvtCgas6gJTv26SGO97fbjphHoogmxh1XAxYtM7U00hjZhNl1k"
            :options="stripeOptions"
            @change="complete = $event.complete"
          />
          <button class="btn btn-success" @click="pay" :disabled="!complete">
            Оплатить картой
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <img
        class="curt-empty"
        src="https://spb.all-lashes.com/bitrix/templates/sotbit_all_lashes/images/empty_basket.png"
        alt=""
      />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { Card, handleCardPayment } from "vue-stripe-elements-plus";
export default {
  name: "Cart",
  components: {
    Card,
    UserForm: () => import("@/components/UserForm"),
  },
  data: () => ({
    showForm: false,
    complete: false,
    stripeOptions: {},
    paymentIntent: "",
  }),
  computed: {
    ...mapGetters({
      cartItems: "cartItems",
      cart: "cart",
      cartCount: "cartCount",
      cartTotalPrice: "cartTotalPrice",
    }),
  },
  methods: {
    ...mapMutations({
      deleteFromCart: "deleteFromCart",
      clearCart: "clearCart",
    }),
    ...mapActions({
      handleBuy: "handleBuy",
    }),
    async handleGetPaymentIntent(form) {
      try {
        const intent = await this.handleBuy({
          ...form,
          products: this.cartItems,
        });
        this.paymentIntent = intent.paymentIntent.client_secret;
      } catch (error) {
        console.log(error);
      }
    },
    async pay() {
      try {
        this.complete = false;
        const successPayment = await handleCardPayment(this.paymentIntent);
        this.clearCart();
        this.$router.push("/successpay");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
  margin-left: auto;
  margin-bottom: 8px;
}
.stripe-card.complete {
  border-color: green;
}
.cart-container {
  text-align: center;
  .curt-empty {
    width: 300px;
    height: 200px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .panel {
    max-width: 960px;
    margin: 0 auto;
    text-align: end;
    .cartPriceInfo {
      margin-right: 5%;
      margin-left: 5%;
    }
  }
  .item-img {
    width: 200px;
    height: 200px;
  }
  ul {
    display: flex;
    list-style-type: none;
    flex-wrap: wrap;
    li {
      max-width: 220px;
      margin: 10px;
      padding: 10px;
      margin: 10px;
      -webkit-box-shadow: -1px 0px 13px 0px rgba(12, 0, 0, 0.82);
      box-shadow: -1px 0px 13px 0px rgba(12, 0, 0, 0.82);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      button {
        margin: 5px 0 0 0;
      }
    }
  }
}
</style>