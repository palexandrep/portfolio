<template>

  <div class="glide container-carousel">
    <div class="glide__track" data-glide-el="track">
      <ContentTeaser/>
    </div>
  </div>
      
</template>

<script>

import {glideCarousel} from '@/assets/js/glide.js'
import {mapGetters} from 'vuex'

export default {
  name: 'ContentTeaser',
  components:{
  },
  data: function(){
    return{
      carouselTimer: 2600
    }
  },
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    }),

    contentTeaser(){
      return this.$store.state.contentTeaser
    }
  },
  mounted: function(){
    const self = this
    glideCarousel('carousel',self)
  }
}
</script>