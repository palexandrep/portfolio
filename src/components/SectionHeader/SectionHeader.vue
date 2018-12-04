<template>
  <div class="container-section-title">
    <h3 class="section-title title">{{title[0]}}</h3>

  </div>
</template>

<script>

import anime from 'animejs'
//import {} from '@/assets/js/animeFunctions'

export default {
  name: 'SectionHeader',
  data: function(){
    return{
      title: [
        'ABOUT ME',
        'MY SKILLS',
        'MY EXPERIENCES',
        'MY DIPLOMA',
        'MY WORK',
        'CONTACT'
      ],
      titleActif: 0
    }
  },mounted: function(){
   /* for(let j=0;j<this.title.length;j=j++){
        this.titleActif = this.title[j]
        console.log(this.title[j])
      }*/
  },

  methods:{

  },
   /* mounted:{
    displayTitles: function(){
      alert('ok')
      for(const i=0;i<this.title.length;i=i++){
        this.titleActif = this.title[i]
        console.log(this.title[i])
      }
    }
  },*/
}

</script>