<template>
      <div class="container-my-universe">
        <div class="cell container-my-universe--circle-border">
          <swiper :options="swiperOption" ref="mySwiper" class=" swiper-container swiper-container__exhib__big container-swiper__custom-style cell">
          <swiperSlide class="swiper-slide" v-bind:key="img.alt" v-for="img in contentExhibitions.images.firstGallery">
            <span  class="swiper-gallery--container">
              <img :src="img.url" :alt="img.alt" class="swiper-gallery--images__vertical-img">
            </span>
          </swiperSlide>
          </swiper>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" class=" swiper-container swiper-container__exhib__small container-swiper__custom-style container-swiper__custom-style__small cell">
          <swiperSlide class="swiper-slide" v-bind:key="img.alt" v-for="img in contentExhibitions.images.secondGallery">
            <span  class="swiper-gallery--container">
              <img :src="img.url" :alt="img.alt" class="swiper-gallery--images__horizontal-img">
            </span>
          </swiperSlide>
          </swiper>
        <img :src="contentExhibitions.illustration.url" :alt="contentExhibitions.illustration.alt" class="swiper-exhibitions--decoration">
      </div>
</template>

<script>

import {mapGetters} from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ContentExhibitions',
  components:{
    swiper,
    swiperSlide
  },
  data: function(){
    return{
      swiperOption: {
        pagination:'swiper-pagination__preferences',
        paginationClickable: true,
        lazyLoading: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          },
        pagination:{
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          hideOnClick: false
        }
      },
    }
  },
  mounted(){
    },
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    }),

    contentExhibitions(){
      return this.$store.state.contentExhibitions
    },
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  }
}
</script>