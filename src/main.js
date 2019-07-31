import 'element-ui/lib/theme-chalk/index.css';
import dataBuilder from './js/builder/data-builder.js';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

Vue.config.productionTip = false;
Vue.config.devtools = true

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

Vue.prototype.dataBuilder = dataBuilder;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
