<template>
    <span>
        <SubSectionTitle :title='titleSubSection' />
        <div class="container-preferences container--sub-section">
            <SwiperCarousel :content="carouselComponent"/>
        </div>
    </span>
</template>

<script>

import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"
import SwiperCarousel from "@/components/Carousel/SwiperCarousel.vue"

export default {
    name: 'Preferences',
    components:{
        SubSectionTitle,
        SwiperCarousel
    },
    data:function(){
        return{
            titleSubSection: 'PREFERENCES',
            carouselComponent: "ContentPreferences"
        }
    }
}
</script>