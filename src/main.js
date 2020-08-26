import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerFilters } from './filters';

// styles
import "./styles/main.scss";

registerFilters();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
