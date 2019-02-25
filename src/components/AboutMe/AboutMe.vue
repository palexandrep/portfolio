<template>
  <div class="container--about-me">
    <SectionHeader id="about-me" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content container--about-me--content">
      <Portrait/>
      <PresentationText/>
      <Button :btnTitle="btnText"/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Portrait from '@/components/AboutMe/Portrait/Portrait.vue'
import PresentationText from '@/components/AboutMe/PresentationText.vue'
import Button from '@/components/Buttons/Button.vue'
import { mapGetters } from 'vuex'

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
        title: "about me",
        lockerClass: "locker-about",
        btnText: "download my cv"
      }
    }
}

</script>
