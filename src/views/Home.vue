<template>
  <div class="home row">
    <span v-on:click="handler()" v-if="menuActif=== true" class="menu--blur-filter__active"></span>
    <Nav/>
    <Header class="bgd-blur"/>
    <AboutMe class="bgd-blur"/>
    <MySkills class="bgd-blur"/>
    <MyExperiences class="bgd-blur"/>
    <MyDiploma class="bgd-blur"/>
    <MyWork class="bgd-blur"/>
    <Contact class="bgd-blur"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import Nav from '@/components/Nav/Nav.vue'
import Header from '@/components/Header/Header.vue'
import AboutMe from '@/components/AboutMe/AboutMe.vue'
import MySkills from '@/components/MySkills/MySkills.vue'
import MyExperiences from '@/components/MyExperiences/MyExperiences.vue'
import MyDiploma from '@/components/MyDiploma/MyDiploma.vue'
import MyWork from '@/components/MyWork/MyWork.vue'
import Contact from '@/components/Contact/Contact.vue'

import anime from 'animejs'
import {slideMenu} from '@/assets/js/animeFunctions.js'

export default {
  name: 'home',
  components:{
    Nav,
    Header,
    AboutMe,
    MySkills,
    MyExperiences,
    MyDiploma,
    MyWork,
    Contact
  },
  computed:{
    menuActif(){
      return this.$store.state.menu.menuActif
    },
        ...mapGetters({
      myState: 'getMyState'
    }),
  },
  methods:{
    CloseMenu: function(){ 
      const burger = document.querySelector('.btn-burger');
        slideMenu('.container-menu__mobile', 500, 100,100)
        burger.classList.remove('btn-burger__actif');
        this.$store.commit('MenuActif')
    },
    ToggleBlur: function(){
      const blurs = document.querySelectorAll('.bgd-blur')
      if(this.$store.state.menu.menuActif=== true){
        for(let blur of blurs){
          blur.classList.add('bgd-blur__active')
        }
      }
      else{
        for(let blur of blurs){
          blur.classList.remove('bgd-blur__active')
        }
      }
    },
    handler: function(){
      this.CloseMenu()
      this.ToggleBlur()
    }
  }
}
</script>
