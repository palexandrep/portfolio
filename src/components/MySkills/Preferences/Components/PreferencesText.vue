<template>
    <span class="container--preferences-text cell glide__slides">
        <div class="container--preference-text glide__slide" v-bind:key="preference.id" v-for="preference in preferences">
            <MicroscopeCells/>
            <h5 class="preference-text">{{preference.name}}</h5>
        </div>
    </span>
</template>

<script>

import MicroscopeCells from "@/components/MySkills/Preferences/Components/MicroscopeCells.vue"

export default {
    name: 'PreferencesText',
    components:{
        MicroscopeCells
    },

    data: function(){
        return{
            preferences:{
                pref1:{
                    name: "integration",
                    id: "pref-integration" 
                },
                pref2:{
                    name: "javascript",
                    id: "pref-javascript"
                },
                pref3:{
                    name: "design",
                    id: "pref-design"
                }
            }
        }
    }
}
</script>

