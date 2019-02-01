<template>
        <ul class="container-list-main-skills grid-x" v-if="bottom !== true">
            <li class="item-main-skills text-main-skills cell small-1" v-bind:key="skill" v-for="skill in skills">
                <h4 class="title title__white">{{skill}}</h4>
            </li>
        </ul>
        <ul class="container-list-main-skills grid-x" v-else>
            <li class="item-main-skills text-main-skills cell small-2" v-bind:key="skill" v-for="skill in skillsFiltered">
                <h4 class="title title__white">{{skill}}</h4>
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
            title: 'MAIN SKILLS',
            skills: ['CSS','UX','HTML','JS','UI'],
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