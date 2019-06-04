<template>
  <div class="container-section-title">
    <!--<Locker class="" :sectionName='lockerClassName'/>-->
    <span class="box-section-title">
      <h3 class="title section-title title__big">{{sectionTitle}}</h3>
    </span>
  </div>
</template>

<script>

import anime from 'animejs'
import Locker from "@/components/Buttons/Locker.vue"
//import {} from '@/assets/js/animeFunctions'

export default {
  name: 'SectionHeader',
  components:{
    Locker
  },
  props:{
    sectionTitle:{
      type: String,
      required: true
    },
    lockerClassName:{
      type: String,
      required: true
    }
  }
}
</script>