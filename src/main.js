import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import {LazyLoadDirective} from "@/assets/js/javaScript.js";
import VueMq from 'vue-mq'


Vue.use(vueSmoothScroll);
Vue.use(VueMq, {
  breakpoints: {
    mobile: 600,
    //md: 1250,
    desktop: Infinity,
  }
})
Vue.directive("lazyload", LazyLoadDirective);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
