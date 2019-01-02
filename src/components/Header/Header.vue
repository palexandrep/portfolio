<template>
  <span class="grid-container">
    <header class="container--header section-content grid-y center">
      <span class="cell sub-container--header">
        <div class="container--title__header">
          <p class="text__header text text__mid-color">{{mainTitle.presentation}}</p>
          <h1 class="title__header text title__white">{{mainTitle.title}}</h1>
        </div>
        <div class="container-header--content-and-subtitle grid-x">
          <ContentTeaser/>
          <SubTitle class="container-header--subtitle"/>
        </div>
        <div class="containr-btn__down-arrow  center">
          <a href="#about-me" class="box-btn__down-arrow">
            <img src="@/assets/img/down-arrow.svg" alt="down arrow" class="btn__down-arrow">
          </a>
        </div>
      </span>
    </header>
  </span>
</template>

<script>

import ContentTeaser from "@/components/Header/ContentTeaser.vue"
import SubTitle from "@/components/Header/SubTitle.vue"

export default {
  name: 'Header',
  components:{
    ContentTeaser,
    SubTitle
  },
  data: function(){
    return{
      mainTitle:{
        presentation: "HELLO, I'M",
        title: "ALEXANDRE PIETTE" 
      },
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
        subTitle: "laboratory"
      }
    }
  },
  methods:{
  }
}
</script>
