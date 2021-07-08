import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log(res+"service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
