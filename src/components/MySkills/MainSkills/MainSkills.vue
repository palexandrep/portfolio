<template>
    <div class="container--main-skills">
        <span class="container--sub-title">
            <h4 class="title sub-title title__white">{{title}}</h4>
        </span>
        <DNA/>
    </div>
</template>

<script>

import anime from 'animejs'
import DNA from '@/components/MySkills/MainSkills/DNA.vue'

export default {
  name: 'MainSkills',
  components:{
      DNA
  },
    data: function(){
        return{
            title: 'MAIN SKILLS'
        }
    }

}
</script>