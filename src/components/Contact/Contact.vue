<template>
  <div class="Container--contact">
    <SectionHeader id="contact" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">

    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'

export default {
  name: 'Contact',
  components:{
    SectionHeader
  },
  data: function(){
    return{
      title: "CONTACT"
    }
  },
  methods:{
  }
}
</script>
