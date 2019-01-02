<template>
  <div class="container-section-title grid-x">
    <Locker class="cell small-2"/>
    <h3 class="section-title title cell small-10">{{sectionTitle}}</h3>
  </div>
</template>

<script>

import anime from 'animejs'
import Locker from "@/components/SectionHeader/Locker.vue"
//import {} from '@/assets/js/animeFunctions'

export default {
  name: 'SectionHeader',
  components:{
    Locker
  },
  data: function(){
    return{
      
    }
  },
  props:{
    sectionTitle:{
      type: String,
      required: true
    }
  },
  methods:{

  }
}
</script>