<template>
    <div class="container--sub-skills">
        <SubSectionTitle :title="titleSubSection" />
        <SubSkillItem class="container--sub-section" />
    </div>
</template>

<script>

import anime from 'animejs'
import SubSkillItem from '@/components/MySkills/SubSkills/SubSkillItem.vue'
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"

export default {
    name: 'SubSkills',
    data:function(){
        return{
            titleSubSection: 'sub skills'
        }
    },
    components:{
        SubSkillItem,
        SubSectionTitle
    }
}
</script>