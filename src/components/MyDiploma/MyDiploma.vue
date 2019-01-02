<template>
  <div class="container--my-diploma">
    <SectionHeader id="my-diploma" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <span class="separation-bar separation-bar__diploma"></span>
      <DiplomaItem/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import DiplomaItem from '@/components/MyDiploma/DiplomaItem/DiplomaItem.vue'



export default {
  name: 'Contact',
  components:{
    SectionHeader,
    DiplomaItem
  },
  data: function(){
    return{
      title:"MY DIPLOMA"
    }
  },
  methods:{
  }
}
</script>
