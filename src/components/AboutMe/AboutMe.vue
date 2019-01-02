<template>
  <div class="container--about-me">
    <SectionHeader id="about-me" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <Portrait/>
      <PresentationText/>
      <Button/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Portrait from '@/components/AboutMe/Portrait/Portrait.vue'
import PresentationText from '@/components/AboutMe/PresentationText.vue'
import Button from '@/components/Buttons/Button.vue'

export default {
    name: 'AboutMe',
    components:{
        SectionHeader,
        Portrait,
        PresentationText,
        Button
    },
    data: function(){
      return{
        title: "ABOUT ME"
      }
    }
}

</script>
