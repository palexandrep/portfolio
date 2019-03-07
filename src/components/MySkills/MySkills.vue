<template>
    <div class="container--skills">
        <SectionHeader id="my-skills" :lockerClassName="lockerClass" :sectionTitle="title"></SectionHeader>
        <span class="container--skills--content container-section-content">
            <MainSkills/>
            <SubSkills/>
            <Preferences/>
        </span>
    </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import MainSkills from '@/components/MySkills/MainSkills/MainSkills.vue'
import SubSkills from '@/components/MySkills/SubSkills/SubSkills.vue'
import Preferences from '@/components/MySkills/Preferences/Preferences.vue'

export default {
  name: 'MySkills',
  components:{
      SectionHeader,
      MainSkills,
      SubSkills,
      Preferences
  },
  data: function(){
      return{
          title: "my skills",
          lockerClass: "locker-skills"
      }
  }
}
</script>