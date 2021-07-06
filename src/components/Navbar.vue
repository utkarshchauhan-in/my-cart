<template>
  <div id="navbar">
    <span v-if="this.$route.path=='/myCart'" class="back-icon">
      <i @click="goHome" class="fa fa-arrow-left" aria-hidden="true"></i>
    </span>
    <span class="home" @click="goHome">Fresh Stock</span>
    <span class="cart-icon">
      <i @click="checkCart" class="fa fa-shopping-cart" aria-hidden="true"></i>
    </span>
    <input class="search" placeholder="Search Products" @keyup="searchProduct" type="text" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return{
      search: "",
      timer: null
    }
  },
  methods: {
    searchProduct(){
      clearTimeout(this.timer);
      this.timer= setTimeout(() => {
        if(this.search){
        let productList = [...this.$store.getters.getProducts];
        let searchResult= productList.filter( product => product.productName.toLowerCase().includes(this.search.toLowerCase()) );
        this.$store.dispatch('searchProducts', searchResult);
        }
        else this.$store.dispatch('searchProducts', null);
      }, 1000)
    },
    goHome() {
      this.$router.push("/").catch(() => {});
    },
    checkCart() {
      this.$router.push("/myCart").catch(() => {});
    }
  }
};
</script>