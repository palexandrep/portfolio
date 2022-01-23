import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import {LazyLoadDirective} from "@/assets/js/javaScript.js";
import VueMq from 'vue-mq'
import 'swiper/dist/css/swiper.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  created(){
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
