<template>
  <div class="menu__mobile">
    <Burger/>
    <span class="background-filter"></span>
    <button v-on:click="animateMenu">push</button>
    <ul class="container-menu container-menu__mobile">
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.about.name}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.skills.name}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.exp.name}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.diploma.name}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.work.name}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <span class="square"></span>
        <h3>{{menuItem.contact.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>

import Burger from '@/components/Header/Menu/Burger.vue'
import anime from 'animejs'
import {slideMenu} from '@/assets/js/animeFunctions.js'

export default {
  name: 'MobileMenu',
  components:{
    Burger
  },
  data: function(){
    return{
      menuItem:{
        about:{
          name: 'ABOUT ME',
          seen: false,
          closed: false
        },
        skills:{
          name: 'MY SKILLS',
          seen: false,
          closed: false
        },
        exp:{
          name: 'MY EXPERIENCES',
          seen: false,
          closed: false
        },
        diploma:{
          name: 'MY DIPLOMA',
          seen: false,
          closed: false
        },
        work:{
          name: 'MY WORK',
          seen: false,
          closed: false
        },
        contact:{
          name: 'CONTACT',
          seen: false,
          closed: false
        }
      },
      menuActif: false
    }
  },
  methods:{
    animateMenu: function(){
      //el,time,translate,easing,elasticity
      if(this.menuActif === false){
        slideMenu('.container-menu__mobile', 200, -100,'easeInQuad',500)
        this.menuActif = true
      }
      else{
        slideMenu('.container-menu__mobile', 200, 100,'easeInQuad',500)
        this.menuActif = false
      }
    }
  }
}
</script>