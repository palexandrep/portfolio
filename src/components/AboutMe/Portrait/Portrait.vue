<template>
  <div @mouseover="animateGrow" @mouseleave="animateShrink" class="container--portrait">
    <atom class="atom"/>
    <img class="portrait-img" src="@/assets/portrait3.jpg" alt="Alexandre Piette">
  </div>
</template>

<script>

import atom from '@/components/AboutMe/Portrait/atom.vue'
import anime from 'animejs'
import {growItem} from '@/assets/js/animeFunctions'

export default {
  name: 'Portrait',
  components:{
    atom
  },
  methods:{

    //---- el, time, scale, elasticity
    animateGrow: function(){
      growItem('.portrait-img', 900, 1.3, 1000)
    },
    animateShrink: function(){
      growItem('.portrait-img', 700, 1, 1000)
    },
  }
}
</script>