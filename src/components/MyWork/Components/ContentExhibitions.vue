<template>
      <ul class="cell glide__slides">
          <li class="glide__slide" v-bind:key="img.alt" v-for="img in contentExhibitions.images">
            <img :src="img.url" :alt="img.alt">
          </li>
      </ul>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ContentExhibitions',
  data: function(){
    return{

    }
  },
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    }),

    contentExhibitions(){
      return this.$store.state.contentExhibitions
    }
  }
}
</script>