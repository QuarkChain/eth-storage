import Vue from 'vue';
import Buefy from 'buefy';
import Element from 'element-ui';

import App from './App.vue';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css';
import './assets/font/font.css';
import './assets/main.css'

Vue.use(Element)
Vue.use(Buefy);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
