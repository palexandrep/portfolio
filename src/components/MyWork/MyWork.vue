<template>
  <div class="Container--my-work">
    <SectionHeader id="my-work" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <Samples />
      <Exhibitions/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Samples from '@/components/MyWork/Components/Samples.vue'
import Exhibitions from '@/components/MyWork/Components/Exhibitions.vue'

export default {
  name: 'MyWork',
  components:{
    SectionHeader,
    Samples,
    Exhibitions
  },
  data: function(){
    return{
      title: "MY WORK"
    }
  }
}
</script>
