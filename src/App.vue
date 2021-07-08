<template>
  <div id="app">
    <Navbar />
    <router-view v-if="loaded" />
    <div v-else>Server Error: Cannot Fetch Data</div>
    <Installer v-if="showInstaller" :installPrompt="installPrompt" @close="closeInstaller"/>
  </div>
</template>

<script>
import Installer from './components/Installer.vue';
import Navbar from "./components/Navbar.vue";
import apiService from "./service";

export default {
  name: "App",
  components: { Navbar, Installer },
  data(){
    return{
      loaded: false,
      range: this.$store.getters.getRange,
      showInstaller: false,
      installPrompt: null
    }
  },
  created(){
    window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    this.installPrompt = e;
    this.showInstaller=true;

    setTimeout(() => {
      this.showInstaller=false;
    },30000)
    })

    apiService(0,this.range, (products) => {
    this.loaded=true;
    this.$store.dispatch("addProducts", products);
    })
  },
  methods: {
    closeInstaller(){
      this.showInstaller=false;
      this.installPrompt=null;
    }
  }
};
</script>