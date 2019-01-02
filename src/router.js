import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'about me',
      component: Home
    },
    {
      path: '/my-skills',
      name: 'my skills',
      component: Home
    },
    {
      path: '/my-experiences',
      name: 'my experiences',
      component: Home
    },
    {
      path: '/my-diploma',
      name: 'my diploma',
      component: Home
    },
    {
      path: '/my-work',
      name: 'my work',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Home
    },
  ]
})
