<template>
    <span class="glide">
        <div class="container-microscope glide__track" data-glide-el="track">
            <PreferencesText/>
        </div>
    </span>  
</template>

<script>

import PreferencesText from "@/components/MySkills/Preferences/Components/PreferencesText.vue"
import {glideSlider} from '@/assets/js/glide.js'

export default {
    name: 'Microscope',
    components:{
        PreferencesText
    },
    mounted: function(){
        //glideSlider('slider')
    }
}
</script>

