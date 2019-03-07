<template>
  <ul class="container--experiences">
    <li class="group--experiences" v-for="domain in myExperiences.domains" v-bind:key="domain.id">
      <div class="container--group-img-experience grid-x" v-if="objLength(domain.experiences)<3">

        <div class="container--img-experience cell small-4">
          <img class="group--img-experience" :src="domain.img" :alt="domain.id">
        </div>
        <span class="cell small-8">
          <span class="grid-x">
            <Post v-bind:key="exp.id" v-for="exp in domain.experiences" :postTitle="exp.textFat" :postText="exp.textSmall"/>
          </span>
        </span>
      </div>

      <div v-else>
        <div class="grid-x">
          <span class="cell small-8">
            <span class="grid-x" v-bind:key="exp.id" v-for="exp in domain.experiences">
              <Post v-if="exp.value<3" :postTitle="exp.textFat" :postText="exp.textSmall"/>
            </span>
          </span>
          <div class="container--img-experience cell small-4">
            <img class="group--img-experience" :src="domain.img" :alt="domain.id">
          </div>
        </div>

        <div class="grid-x">
          <span class="cell small-12">
            <span class="grid-x" v-bind:key="exp.id" v-for="exp in domain.experiences">
              <Post v-if="exp.value>2" :postTitle="exp.textFat" :postText="exp.textSmall"/>
            </span>
          </span>
        </div>
      </div>

      <span class="container-experiences-separation">
        <span class="experiences-separation experiences-separation__top"></span>
        <span class="experiences-separation experiences-separation__bottom"></span>
      </span>
    </li>
    <li class="container--img-experience grid-x">
      <img class="group--img-experience cell center" :src='chemicalReaction' alt="chemicals reaction">
    </li>
  </ul>
</template>

<script>

import Post from "@/components/Posts/Post.vue"
import { mapGetters } from "vuex"

export default {
  name: 'Experience',
  components:{
    Post
  },

  data: function(){
    return{
      chemicalReaction: require("@/assets/img/chemical_reaction.svg"),

    }
  },
  computed:{
    ...mapGetters({
      myState: 'getMystate'
    }),
    myExperiences(){
      return this.$store.state.experiences
    }
  },
  methods:{
    objLength: function(obj){
      return Object.keys(obj).length
    },
    ok: function(zz){
      console.log(zz)
    }
  }
}

</script>