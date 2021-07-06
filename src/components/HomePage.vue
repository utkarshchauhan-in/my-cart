<template>
  <div id="main-container" class="container">
    <Card
      v-for="product in productList"
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
import { mapState } from 'vuex';

export default {
  name: "HomePage",
  components: { Card },
  data(){
    return{
      cartList: [],
      next: this.$store.getters.getNext,
      range: this.$store.getters.getRange,
      total: this.$store.getters.getTotal
    }
  },
  computed: mapState({
    productList: state => state.searchList?state.searchList:state.productList,
    searchOn: state => state.searchList?true:false
  }),
  created() {
    this.cartList=this.$store.getters.getCart.map( product => {
      return product.productId;
    })
  },
  mounted(){
    const loadData = () =>{
      if(!this.searchOn && (this.next <= this.total/this.range) && (window.innerHeight + window.scrollY >= document.body.scrollHeight)){
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