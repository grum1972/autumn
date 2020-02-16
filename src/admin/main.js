import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import $axios from './requests';


store.$axios = $axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
}).$mount('#app');