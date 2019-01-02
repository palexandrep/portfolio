<template>

  <div class="glide container-carousel">
    <div class="glide__track" data-glide-el="track">
      <ul class="header--container-skills-preview cell glide__slides">
          <li class="header--container-skill-preview glide__slide" v-bind:key="title.id" v-for="title in contentTeaser.titles">
            <h4 class="title__content-teaser title title__mid-color">{{title.name}}</h4>
            <p class="text__content-teaser text text__mid-color">{{contentTeaser.subTitle}}</p>
          </li>
      </ul>
  </div>
  </div>
      
</template>

<script>

//import anime from 'animejs'
import {glideCarousel} from '@/assets/js/glide.js'

export default {
  name: 'ContentTeaser',
  components:{
  },
  data: function(){
    return{
      carouselTimer: 2600,
      contentTeaser:{
        titles:{
          title1:{
            name: "CSS",
            id: "teaser-title1"
          },
          title2:{
            name: "JS",
            id: "teaser-title2"
          },
          title3:{
            name: "HTML",
            id: "teaser-title3"
          },
          title4:{
            name: "UX",
            id: "teaser-title4"
          },
          title5:{
            name: "UI",
            id: "teaser-title5"
          }
        },
        subTitle: "Laboratory"
      }
    }
  },
  mounted: function(){
    const self = this
    glideCarousel('carousel',self)
  }
}
</script>