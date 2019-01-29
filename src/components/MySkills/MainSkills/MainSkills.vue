<template>
    <div class="container--main-skills">
        <span class="container--sub-title">
            <h4 class="title sub-title title__white">{{title}}</h4>
        </span>
        <ul class="container-list-main-skills">
            <li class="item-main-skills text-main-skills" v-bind:key="skill" v-for="skill in skills">
                <h4 class="title title__white">{{skill}}</h4>
            </li>
            <DNA class="item-main-skills text-main-skills"/>
        </ul>
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
            title: 'MAIN SKILLS',
            skills: [
                'CSS','UX','HTML','JS','UI',
            ]
        }
    }
}
</script>