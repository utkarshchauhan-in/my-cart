<template>
  <div id="main-container" class="container">
    <Card
      v-for="product in products"
      :key="product.productId"
      :product="product"
      :cartItem="cartList.includes(product.productId)"
      @addItem="addItem"
      @removeItem="removeItem"
    />
  </div>
</template>

<script>
import Card from "./Card.vue";
import apiService from '../service';

export default {
  name: "HomePage",
  components: { Card },
  data(){
    return{
      cartList: [],
      products: [],
      next: this.$store.getters.getNext,
      range: this.$store.getters.getRange,
      total: this.$store.getters.getTotal
    }
  },
  created() {
    this.products = [...this.$store.getters.getProducts];
    this.cartList=this.$store.getters.getCart.map( product => {
      return product.productId;
    })
  },
  mounted(){
    const loadData = () =>{
      if((this.next <= this.total/this.range) && (window.innerHeight + window.scrollY >= document.body.scrollHeight)){
        this.getNextData();
      }
    }

    document.addEventListener('scroll', loadData);
  },
  methods: {
    getNextData(){
      apiService(this.next*this.range, this.range, (data) => {
        this.loaded=true;
        this.$store.dispatch("addProducts", data).then(() => {
          this.products.push(...data.products);
          this.next++;
        });
      })
    },
    addItem(id){
      this.cartList.push(id);
    },
    removeItem(id){
      this.cartList=this.cartList.filter(item => item !== id)
    }
  }
};
</script>