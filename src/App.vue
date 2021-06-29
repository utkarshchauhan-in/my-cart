<template>
  <div id="app">
    <Navbar />
    <router-view v-if="loaded" />
    <div v-else>Server Error: Cannot Fetch Data</div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import apiService from "./service";

export default {
  name: "App",
  components: { Navbar },
  data(){
    return{
      loaded: false,
      range: this.$store.getters.getRange
    }
  },
  created(){
    apiService(0,this.range, (products) => {
    this.loaded=true;
    this.$store.dispatch("addProducts", products);
    })
  }
};
</script>