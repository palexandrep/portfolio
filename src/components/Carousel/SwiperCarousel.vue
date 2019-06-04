<template>
    <div>
        <ContentPreferences v-if="content=='ContentPreferences'"/>
        <ContentExhibitions v-if="content=='ContentExhibitions'"/>
    </div>
</template>

<script>

import ContentExhibitions from '@/components/MyWork/Components/ContentExhibitions.vue'
import ContentPreferences from '@/components/MySkills/Preferences/Components/ContentPreferences.vue'

export default {
    name: 'SwiperCarousel',
    components:{
        ContentExhibitions,
        ContentPreferences
    },
    props:{
        content:{
            type: String,
            required: true
        }
    },
    
}
</script>

