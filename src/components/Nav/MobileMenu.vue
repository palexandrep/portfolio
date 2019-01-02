<template>
  <nav class="container--menu__mobile">
    <div class="container-burger">
      <Burger/>
    </div>
    <span class="bg-filter"></span>
    <ul class="container-menu container-menu__mobile">
      <li class="menu--item" v-for="section in sections" v-bind:key="section.id">
        <span class="square"></span>
        <a class="text__mid-color" v-on:click="toggleMenu()" :href="section.anchor"><h3>{{section.name}}</h3></a>
      </li>
    </ul>
  </nav>
</template>

<script>

import anime from 'animejs'
import javaScript from '@/assets/js/javaScript.js'
import Burger from '@/components/Nav/Burger.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MobileMenu',
  components:{
    Burger
  },

  computed:{

    ...mapGetters({
      myState: 'getMyState'
    }),

    menuActif(){
      return this.$store.state.menu.menuActif
    },
    sections(){
      return this.$store.state.sections
    }
  },
  mounted: function(){
    this.toggleMenu = javaScript.toggleMenu
  }
}
</script>