<template>
    <button v-on:click="ToggleMenu()" class="btn-burger">
      <span class="burger">
        <span class="burger__line burger__line--top"></span>
        <span class="burger__line burger__line--center"></span>
        <span class="burger__line burger__line--bottom"></span>
      </span>  
    </button>
</template>

<script>

import anime from 'animejs'
import {slideMenu} from '@/assets/js/animeFunctions.js'
import {ToogleBlur} from '@/assets/js/javaScript.js'

export default {
  name: 'Burger',

  computed:{
    menuActif(){
      return this.$store.state.menu.menuActif
    }
  },
  methods:{
    ToggleMenu: function(){
      const blurs = document.querySelectorAll('.bgd-blur')
      const burger = document.querySelector('.btn-burger');
      if(this.$store.state.menu.menuActif === false){
        slideMenu('.container-menu__mobile', 500, -80,100)
        burger.classList.add('btn-burger__actif');
        this.$store.commit('MenuActif')
        for(let blur of blurs){
          blur.classList.add('bgd-blur__active')
        }
      }
      else{
        slideMenu('.container-menu__mobile', 1000, 100,400)
        burger.classList.remove('btn-burger__actif');
        this.$store.commit('MenuActif')
        for(let blur of blurs){
          blur.classList.remove('bgd-blur__active')
        }
      }
    }
  }
}
</script>