<template>
  <div class="container--diploma">
    <SectionHeader id="my-diploma" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container--diploma--content container-section-content">
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
      title:"my diploma",
      lockerClass: "locker-diploma",
    }
  }
}
</script>
