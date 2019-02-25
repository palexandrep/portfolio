<template>
    <span>
        <SubSectionTitle :title="title"/>
        <Carousel :content="carouselComponent"/>
    </span>
</template>

<script>

import Carousel from "@/components/Carousel/Carousel.vue"
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue" 

export default {
    name: "Exhibitions",
    components:{
        SubSectionTitle,
        Carousel
    },
    data:function(){
        return{
            carouselComponent: "ContentExhibitions",
            title: "exhibitions"
        }
    }

}
</script>
