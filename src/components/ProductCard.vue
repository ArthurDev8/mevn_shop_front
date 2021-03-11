<template>
  <div class="card">
    <img :src="imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <div class="titleAndPrice title">{{ title }}</div>
      <div class="titleAndPrice">{{price}}$</div>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
    <button class="btn btn-info" @click="$emit('addToCart')" v-if="!inCart">В корзину</button>
    <button class="btn btn-danger"  @click="$emit('deleteFromCart')" v-else>Удалить c корзины</button>
  </div>
</template>

<script>
export default {
  name: "ProducrtCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    inCart:{
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 280px;
  margin: 10px;
  -webkit-box-shadow: -1px 0px 13px 0px rgba(12, 0, 0, 0.82);
  box-shadow: -1px 0px 13px 0px rgba(12, 0, 0, 0.82);
  .title{
    color: #3b97d3;
  }
  .titleAndPrice{
    font-size: 22px;
    font-weight: bold;
  }
  .btn {
    margin: 10px;
  }
}
img {
  object-fit: fill;
  height: 280px;
}
</style>