<template>
    <button v-on:click="toggleMenu()" class="btn-burger">
      <span class="burger">
        <span class="burger__line burger__line--top"></span>
        <span class="burger__line burger__line--center"></span>
        <span class="burger__line burger__line--bottom"></span>
      </span>  
    </button>
</template>

<script>

import anime from 'animejs'
import {toggleMenu} from '@/assets/js/javaScript.js'

export default {
  name: 'Burger',
    
  mounted: function(){
    this.toggleMenu = toggleMenu
  }
}
</script>