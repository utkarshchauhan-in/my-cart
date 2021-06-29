<template>
  <div class="container">
    <Card
      v-for="product in products"
      :key="product.productId"
      :product="product"
      :cartItem="true"
      @removeItem="removeItem"
    />
    <h2 class="empty-cart" v-if="products.length==0">No items added in cart!</h2>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Cart",
  components: { Card },
  data() {
    return {
      products: [],
      cartList: []
    };
  },
  created() {
    this.products = this.$store.getters.getCart;
    this.cartList=this.products.map( product => {
      return product.productId;
    })
  },
  methods: {
    removeItem(id){
      this.cartList=this.cartList.filter(item => item !== id)
      this.products=this.products.filter(item => item.productId !== id)
    }
  }
};
</script>