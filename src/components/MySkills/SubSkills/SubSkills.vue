<template>
    <div class="container--sub-skills">
        <span class="container--sub-title">
            <h4 class="title sub-title title__white">{{title}}</h4>
        </span>
        <SubSkillItem class="container--sub-section" />
    </div>
</template>

<script>

import anime from 'animejs'
import SubSkillItem from '@/components/MySkills/SubSkills/SubSkillItem.vue'

export default {
    name: 'SubSkills',
    data:function(){
        return{
            title: 'SUB SKILLS'
        }
    },
    components:{
        SubSkillItem
    }
}
</script>