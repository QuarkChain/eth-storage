import Vue from 'vue';
import Buefy from 'buefy';
import Element from 'element-ui';
import Banner from "vue-banner-better";

import App from './App.vue';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css';
import './assets/main.css'
import './assets/font/font.css';

Vue.use(Element)
Vue.use(Buefy);
// use plugin,it will mount Banner and slide components globally
Vue.use(Banner);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
