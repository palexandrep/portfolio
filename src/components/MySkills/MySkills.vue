<template>
    <div class="container--skills">
        <SectionHeader/>
        <MainSkills/>
        <SubSkills/>
        <Preferences/>
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
  }
}
</script>