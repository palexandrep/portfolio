<template>
  <div @mouseover="animateGrow" @mouseleave="animateShrink" class="container--portrait">
    <atom class="atom"/>
    <img class="portrait-img" src="@/assets/portrait.jpg" alt="Alexandre Piette">
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
    animateGrow: function(){
      growItem('.portrait-img', 900, 2.5, 100)
    },
    animateShrink: function(){
      growItem('.portrait-img', 700, 1, 500)
    },
  }
}
</script>