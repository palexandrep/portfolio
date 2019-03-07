<template>
  <div class="container--contact">
    <SectionHeader id="contact" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
    <span class="container--contact--content container-section-content">
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
      title: "contact",
      lockerClass: "locker-contact",
      firstBtnText: "download my cv",
      secondBtnText: "contact me"
    }
  }
}
</script>
