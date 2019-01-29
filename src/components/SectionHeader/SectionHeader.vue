<template>
  <div class="container-section-title grid-x">
    <Locker class="cell small-2"/>
    <span class="box-section-title cell small-10">
      <h3 class="title section-title">{{sectionTitle}}</h3>
    </span>
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