<template>
  <nav class="container--menu__mobile">
    <div class="container-burger">
      <Burger/>
    </div>
    <span class="bg-filter"></span>
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
  </nav>
</template>

<script>

import Burger from '@/components/Nav/Burger.vue'
import { mapGetters } from 'vuex'

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
      //menuActif: false
    }
  },
  computed:{

    ...mapGetters({
      myState: 'getMyState'
    }),

    myState(){
      alert('ok')
    },
    ActiveFilterMenu: function(){
      console.log(this.myState)
      alert('ok')
      const filter = document.querySelectorAll('.menu--blur-filter');
      if(this.$store.state.menu.menuActif === true){
        filter.classList.add('menu--blur-filter__active');
      }
    }
  },
  methods:{
  }
}
</script>