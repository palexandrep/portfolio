<template>
  <div class="Container--contact">
    <SectionHeader id="contact" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <Button :btnTitle="firstBtnText"/>
      <Button :btnTitle="secondBtnText"/>
    </span>
    <Footer/>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Button from '@/components/Buttons/Button.vue'
import Footer from '@/components/Contact/Footer.vue'

export default {
  name: 'Contact',
  components:{
    SectionHeader,
    Button,
    Footer
  },
  data: function(){
    return{
      title: "CONTACT",
      firstBtnText: "DOWNLOAD MY CV",
      secondBtnText: "CONTACT ME"
    }
  },
  methods:{
  }
}
</script>
