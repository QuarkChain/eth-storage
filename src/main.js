import Vue from 'vue';
import Buefy from 'buefy';
import Element from 'element-ui';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import router from './router';

import 'element-ui/lib/theme-chalk/index.css';
import 'buefy/dist/buefy.css';
import './assets/main.css'
import './assets/font/font.css';

Vue.use(Element)
Vue.use(Buefy);

library.add(faInfoCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
