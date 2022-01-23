<template>
    <span>
        <span class="bubble" v-bind:key="n" v-for="n in nbDecorationBtn.nbDot"></span>
    </span>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'BtnDecorations',
    computed:{
        ...mapGetters({
        myState: 'getMyState'
        }),

        nbDecorationBtn(){
            return this.$store.state.nbDecorationBtn
        },

        
    },
    mounted: function(){
        const MovingBubbles = function(){
           const bubbles = document.querySelectorAll('.bubble')
        }()

    }
}
</script>

