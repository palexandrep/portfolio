<template>
        <span class="container-list-main-skills" v-if="bottom !== true">
            <ul class="sub-container-list-main-skills sub-container-list-main-skills__top">
                <li data-aos="zoom-in" class="item-main-skills item-main-skills__top text-main-skills" v-bind:key="skill" v-for="skill in skills">
                    <span class="main-skills-decoration main-skills-decoration__top"></span>
                    <span class="container--title-main-skills container--title-main-skills__top">
                        <h4 class="title-main-skills title-main-skills__top title title__mid-color">{{skill}}</h4>
                    </span>
                </li>
            </ul>
        </span>
        <span class="container-list-main-skills" v-else>
            <ul class="sub-container-list-main-skills sub-container-list-main-skills__bottom">
                <li class="item-main-skills item-main-skills__bottom text-main-skills" v-bind:key="skill" v-for="skill in skillsFiltered">
                    <span class="container--title-main-skills container--title-main-skills__bottom">
                        <h4 class="title-main-skills title-main-skills__bottom title title__mid-color">{{skill}}</h4>
                    </span>
                    <span class="main-skills-decoration main-skills-decoration__bottom"></span>
                </li>
            </ul>
        </span>
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