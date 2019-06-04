<template>
    <div class="box-item--experience post cell">
        <h5 class="title  title__exp text__normal">{{postTitle}}</h5>
        <p class="text title__exp text__small text__bgc-color">{{postText}}</p>
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default {
  name: 'Post',

  props:{
      postTitle:{
          type: String
      },
      postText:{
          type: String
      }
  },
  computed:{
    ...mapGetters({
      myState: 'getMystate'
    }),
    myExperiences(){
      return this.$store.state.experiences
    }
  }
}

</script>