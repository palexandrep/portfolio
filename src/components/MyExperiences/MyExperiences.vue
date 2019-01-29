<template>
  <div class="Container--my-experiences">
    <SectionHeader id="my-experiences" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
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
      title: "MY EXPERIENCES"
    }
  }
}
</script>
