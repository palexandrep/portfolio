<template>
  <div class="glide container-carousel">
    <div class="glide__track" data-glide-el="track">
      <ContentTeaser v-if="content=='ContentTeaser'"/>
    </div>
  </div>    
</template>

<script>

import ContentTeaser from '@/components/Header/ContentTeaser.vue'
import {glideCarousel} from '@/assets/js/glide.js'
import {mapGetters} from 'vuex'

export default {
  name: 'Carousel',
  components:{
      ContentTeaser
  },
  data: function(){
    return{
      carouselTimer: 2600
    }
  },
  props:{
      content:{
          required: true
      }
  },
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    })
  },
  mounted: function(){
    let self = this
    glideCarousel('carousel',self)
  }
}
</script>