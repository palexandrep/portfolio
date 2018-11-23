<template>
  <div class="container-section-title">
    <h3 class="section-title title">{{title}}</h3>

  </div>
</template>

<script>

import anime from 'animejs'
//import {} from '@/assets/js/animeFunctions'

export default {
  name: 'Title',
  data: function(){
    return{
      title: 'hello'
    }
  }
}

</script>