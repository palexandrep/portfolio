<template>
  <span class="grid-container" id="container--header__global">
    <header class="container--header section-content grid-y center">
      <span class="cell sub-container--header">
        <span>
          <div class="container--title__header">
            <p class="text__header text text__mid-color">{{mainTitle.presentation}}</p>
            <h1 class="title__header text title__white">{{mainTitle.title}}</h1>
          </div>
          <span class="container-header--content-and-subtitle">
            <div class="sub-container-header--content-and-subtitle grid-x">
              <Carousel :content="carouselComponent" class="cell"/>
              <SubTitle class="container-header--subtitle"/>
            </div>
          </span>
        </span>
        
        <ScrollArrow :btnDirection="bottomArrow" :scrollLocation="scrollLinkTarget" :arrowColor="scrollBottomColor"/>
      </span>
    </header>
  </span>
</template>

<script>

import Carousel from "@/components/Carousel/Carousel.vue"
import ContentTeaser from "@/components/Header/ContentTeaser.vue"
import SubTitle from "@/components/Header/SubTitle.vue"
import ScrollArrow from "@/components/Buttons/ScrollArrow.vue"

export default {
  name: 'Header',
  components:{
    Carousel,
    SubTitle,
    ScrollArrow
  },
  data: function(){
    return{
      carouselComponent: "ContentTeaser",
      bottomArrow: "btn--arrow__to-bottom",
      scrollBottomColor: "btn__mid-col",
      scrollLinkTarget: "#about-me",
      mainTitle:{
        presentation: "hello, i'm",
        title: "alexandre piette" 
      },
      contentTeaser:{
        titles:{
          title1:{
            name: "css",
            id: "teaser-title1"
          },
          title2:{
            name: "js",
            id: "teaser-title2"
          },
          title3:{
            name: "html",
            id: "teaser-title3"
          },
          title4:{
            name: "ux",
            id: "teaser-title4"
          },
          title5:{
            name: "ui",
            id: "teaser-title5"
          }
        },
        subTitle: "laboratory"
      }
    }
  }
}
</script>
