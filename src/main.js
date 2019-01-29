import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import {LazyLoadDirective} from "@/assets/js/javaScript.js";


Vue.use(vueSmoothScroll);
Vue.directive("lazyload", LazyLoadDirective);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
