<template>
        <ul class="container-list-main-skills grid-x grid-margin-x" v-if="bottom !== true">
            <li class="item-main-skills item-main-skills__top text-main-skills cell small-4" v-bind:key="skill" v-for="skill in skills">
                <span class="main-skills-decoration"></span>
                <h4 class="title-main-skills title-main-skills__top title title__mid-color">{{skill}}</h4>
            </li>
        </ul>
        <ul class="container-list-main-skills grid-x grid-margin-x" v-else>
            <li class="item-main-skills item-main-skills__bottom text-main-skills cell small-6" v-bind:key="skill" v-for="skill in skillsFiltered">
                <h4 class="title-main-skills title-main-skills__bottom title title__mid-color">{{skill}}</h4>
                <span class="main-skills-decoration"></span>
            </li>
        </ul>
</template>

<script>

import anime from 'animejs'
import DNA from '@/components/MySkills/MainSkills/DNA.vue'

export default {
  name: 'MainSkill',
  components:{
      DNA
  },
    data: function(){
        return{
            title: 'main skills',
            skills: ['css','ux','html','js','ui'],
            skillsFiltered:''
        }
    },
    props:{
        bottom:{
            default: true,
            required: false
        }
    },
    mounted: function(){
        const self = this
        const skillsFiltering = function(){
            const nbSkills = self.skills.length
            const skillsList = self.skills
            const skillsListFiltered = skillsList.splice(3,nbSkills)
            self.skillsFiltered = skillsListFiltered
        }()
    }
}
</script>