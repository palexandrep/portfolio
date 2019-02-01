<template>
    <div class="container--main-skills">
        <span class="container--sub-title">
            <h4 class="title sub-title title__white">{{title}}</h4>
        </span>
        <div class="container--sub-section">
            <MainSkill/>
            <DNA class="item-main-skills text-main-skills"/>
            <MainSkill :bottom={check} />
        </div>
    </div>
</template>

<script>

import DNA from '@/components/MySkills/MainSkills/DNA.vue'
import MainSkill from '@/components/MySkills/MainSkills/MainSkill.vue'

export default {
  name: 'MainSkills',
  components:{
      DNA,
      MainSkill
  },
    data: function(){
        return{
            title: 'MAIN SKILLS',
            check:true
        }
    }
}
</script>