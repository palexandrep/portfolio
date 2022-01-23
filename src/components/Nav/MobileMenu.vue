<template>
  <nav class="container--menu__mobile">
    <div class="container-burger">
      <Burger/>
    </div>
    <span class="bg-filter"></span>
    <ul class="container-menu container-menu__mobile">
      <li class="menu--item" v-for="section in sections" v-bind:key="section.id">
        <span class="square"></span>
        <a class="text__mid-color" v-smooth-scroll="{ duration: 500, offset: 0, container: '' }" v-on:click="toggleMenu()" :href="section.anchor">
          <h3 :ref="`section${section.nb}`">{{section.name}}</h3>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

import anime from 'animejs'
import { toggleMenu } from '@/assets/js/javaScript.js'
import Burger from '@/components/Buttons/Burger.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MobileMenu',
  components:{
    Burger
  },
  data:function(){
    return{
      width: ''
    }
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
    // call from assets/js
    this.toggleMenu = toggleMenu
  }
}
</script>