<template>
      <ul class="header--container-skills-preview cell glide__slides">
          <li class="header--container-skill-preview glide__slide" v-bind:key="title.id" v-for="title in contentTeaser.titles">
            <h4 class="title__content-teaser title title__mid-color">{{title.name}}</h4>
            <p class="text__content-teaser text text__mid-color">{{contentTeaser.subTitle}}</p>
          </li>
      </ul>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ContentTeaser',
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    }),
    contentTeaser(){
      return this.$store.state.contentTeaser
    }
  }
}
</script>