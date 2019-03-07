<template>
  <div class="container--about-me">
    <SectionHeader id="about-me" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class=" container-section-content container--about-me--content">
      <SubSectionTitle :title="titleSubSection" />
      <Portrait/>
      <PresentationText/>
      <Button :btnTitle="btnText"/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"
import Portrait from '@/components/AboutMe/Portrait/Portrait.vue'
import PresentationText from '@/components/AboutMe/PresentationText.vue'
import Button from '@/components/Buttons/Button.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'AboutMe',
    components:{
        SectionHeader,
        SubSectionTitle,
        Portrait,
        PresentationText,
        Button
    },
    data: function(){
      return{
        titleSubSection: 'Who am I ?',
        title: "about me",
        lockerClass: "locker-about",
        btnText: "download my cv"
      }
    }
}

</script>
