import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TDesign from 'tdesign-vue-next';

import './assets/main.css'
import './assets/font/font.css';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)

app.use(router)
app.use(TDesign);

app.mount('#app')
