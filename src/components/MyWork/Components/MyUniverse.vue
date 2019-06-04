<template>
    <span class="global-container-exhibitions">
        <SubSectionTitle :title="title"/>
        <SwiperCarousel :content="carouselComponent"/>
    </span>
</template>

<script>

import SwiperCarousel from "@/components/Carousel/SwiperCarousel.vue"
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue" 

export default {
    name: "MyUniverse",
    components:{
        SubSectionTitle,
        SwiperCarousel
    },
    data:function(){
        return{
            carouselComponent: "ContentExhibitions",
            title: "My universe"
        }
    }
}
</script>
