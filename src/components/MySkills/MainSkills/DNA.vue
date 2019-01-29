<template>
  <div class="container--dna">
    <div class="container-propeller">
        <div class="sub-container-propeller sub-container-propeller--left"></div>
        <div class="sub-container-propeller sub-container-propeller--right"></div>
    </div>
  </div>
</template>

<script>

import {addChild} from '@/assets/js/javaScript.js'

export default {
  name: 'DNA',
  data: function(){
    return{
      dnaLenght: 12
    }
  },
  methods:{

  },
  
  mounted: function(){
    const self = this;
    function createChild(){
      for(let i=0;i<self.dnaLenght;i++){
        const ballsContainer = document.querySelectorAll('.sub-container-propeller');
        
        for(let j=0;j<ballsContainer.length;j++){
          const newElement = document.createElement('div');
          newElement.setAttribute('class', 'ball');
          ballsContainer[j].appendChild(newElement)
        }
      } 
    }
    createChild()

    const ballsDelay = document.querySelectorAll('.sub-container-propeller--right>.ball').lenght,
          ballsLeft = document.querySelectorAll('.sub-container-propeller--left>.ball'),
          ballsRight = document.querySelectorAll('.sub-container-propeller--right>.ball');

    for (let i = 0; i<ballsLeft.length; i++){
      ballsLeft[i].setAttribute('style', 'animation-delay: '+[i]+'00ms');
      ballsRight[i].setAttribute('style', 'animation-delay: '+[i]+'00ms');
    }
  }
}
</script>