<template>
  <div class="container--dna">
    <div class="container-propeller">
        <div class="sub-container-propeller sub-container-propeller--left"></div>
        <div class="sub-container-propeller sub-container-propeller--right"></div>
    </div>
  </div>
</template>

<script>

import {addChild, randomNum} from '@/assets/js/javaScript.js'
import {mapGetters} from 'vuex'

export default {
  name: 'DNA',
  data: function(){
    return{
      dnaLength: 12,
      decoration:2
    }
  },
  mounted: function(){
    const self = this;
    function createChild(){
      for(let i=0;i<self.dnaLength;i++){
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
          ballsRight = document.querySelectorAll('.sub-container-propeller--right>.ball'),
          balls = document.querySelectorAll('.ball');

    const createDecorationBalls = function(){
      const randomDecoLeft = randomNum(self.decoration, self.dnaLength-1, 0, false),
            randomDecoRight = randomNum(self.decoration, self.dnaLength-1, 0, false)

      for (let i = 0; i<self.decoration; i++){
        const subDecorationLeft = document.createElement('span');
        const subDecorationRight = document.createElement('span');
        let numLeft = randomDecoLeft[i]
        let numRight = randomDecoRight[i]
        ballsLeft[numLeft].classList.add('ball__decoration')
        ballsLeft[numLeft].appendChild(subDecorationLeft)
        ballsRight[numRight].classList.add('ball__decoration')
        ballsRight[numRight].appendChild(subDecorationRight)
      }
    }
    createDecorationBalls()

    for (let i = 0; i<ballsLeft.length; i++){
      ballsLeft[i].setAttribute('style', 'animation-delay: '+[i]+'00ms');
      ballsRight[i].setAttribute('style', 'animation-delay: '+[i]+'00ms');
    }
  },
  computed:{
    ...mapGetters({
      myState: 'getMyStateDna'
      //----------------- mq dna length ... debugg
    }),
  },
  watch:{
    changeMqState(){
      alert('yop')
      if(this.$mq === 'sm'){
        store.commit('Media',true)
        alert('pas ok')
      }
      else{
        store.commit('Media',false)
        alert('ok')
      }
    }
  }
}
</script>