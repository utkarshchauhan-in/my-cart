<template>
  <div id="navbar">
    <span v-if="this.$route.path=='/myCart'" class="back-icon">
      <i @click="goHome" class="fa fa-arrow-left" aria-hidden="true"></i>
    </span>
    <span class="home" @click="goHome">Fresh Stock</span>
    <span class="cart-icon">
      <i @click="checkCart" class="fa fa-shopping-cart" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    checkCart() {
      this.$router.push("/myCart").catch(() => {});
    },
  }
};
</script>