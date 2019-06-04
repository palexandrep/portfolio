<template>
  <div class="container--work">
    <SectionHeader id="my-work" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class="container-section-content container--work--content">
      <Samples />
      <MyUniverse/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Samples from '@/components/MyWork/Components/Samples.vue'
import MyUniverse from '@/components/MyWork/Components/MyUniverse.vue'

export default {
  name: 'MyWork',
  components:{
    SectionHeader,
    Samples,
    MyUniverse
  },
  data: function(){
    return{
      title: "my work",
      lockerClass: "locker-work"
    }
  }
}
</script>
