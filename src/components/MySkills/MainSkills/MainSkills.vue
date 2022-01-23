<template>
    <div class="container--main-skills">
        <SubSectionTitle :title='titleSubSection' />
        <div class="container--sub-section">
            <MainSkill/>
            <DNA class="item-main-skills text-main-skills"/>
            <MainSkill :bottom='{check}'/>
        </div>
    </div>
</template>

<script>

import DNA from '@/components/MySkills/MainSkills/DNA.vue'
import MainSkill from '@/components/MySkills/MainSkills/MainSkill.vue'
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"

export default {
  name: 'MainSkills',
  components:{
      DNA,
      MainSkill,
      SubSectionTitle
  },
    data: function(){
        return{
            titleSubSection: 'main skills',
            check: true
        }
    }
}
</script>