<template>
  <div class="container-section-title">
    <h3 class="section-title title">{{title[0]}}</h3>

  </div>
</template>

<script>

import anime from 'animejs'
//import {} from '@/assets/js/animeFunctions'

export default {
  name: 'Title',
  data: function(){
    return{
      title: [
        'ABOUT ME',
        'MY SKILLS',
        'MY EXPERIENCES',
        'MY DIPLOMA',
        'MY WORK',
        'CONTACT'
      ]
    }
  }
}

</script>