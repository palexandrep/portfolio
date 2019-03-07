<template>
  <div class="container--experiences">
    <SectionHeader id="my-experiences" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class="container--experiences--content container-section-content">
      <Experience/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Experience from '@/components/MyExperiences/Experience.vue'


export default {
  name: 'MyExperiences',
  components:{
    SectionHeader,
    Experience
  },
  data: function(){
    return{
      title: "my experiences",
      lockerClass: "locker-experiences"
    }
  }
}
</script>
