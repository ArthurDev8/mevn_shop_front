<template>
  <header class="header">
    <div class="header_left">
      <router-link to="/"
        ><img class="logo" :src="require('@/assets/img/logo.png')"
      /></router-link>
    </div>
    <div class="header-right">
      <ul class="nav">
        <li class="nav_link" v-for="(category, key) in categories" :key="key">
          <router-link :to="`category/${category.title}`">{{
            category.title
          }}</router-link>
        </li>
      </ul>
    </div>
    <router-link to="/cart" class="cart">
      <img class="cart-img" :src="require('@/assets/img/cart.png')" />
      <h5>{{ cartCount }}</h5>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    cartCount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(59, 57, 57);
  padding: 5px;
}
.cart {
  display: flex;
  align-items: center;
  text-decoration: none;
  .cart-img {
    width: 25px;
    margin-right: 10px;
  }
  h5 {
    margin-top: 10px;
    color: #3b97d3;
  }
}

.logo {
  width: 50px;
}
.nav {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
  padding-inline-start: 0;

  &_link {
    a {
      cursor: pointer;
      margin: 0 10px;
      text-decoration: none;
      color: rgb(156, 151, 151);
      font-size: 22px;
      transition: 0.3s;
      &:hover {
        color: #3b97d3;
      }
    }
  }
}
</style>