<template>
    <div class="container--btn__call-to">
        <!--<div class="bubble-container bubble-container--top">
            <BtnDecorations/>
        </div>-->
        <a :href="`mailto:${openLink}`" class="btn btn__call-to title title__small shadow">{{btnTitle}}</a>
        <!--<div class="bubble-container bubble-container--bottom">
            <BtnDecorations/>
        </div>-->
    </div>
</template>

<script>

import anime from 'animejs'
import {animateBtn} from '@/assets/js/animeFunctions'
import {btnDecorationAnimate} from '@/assets/js/animeFunctions'
//import BtnDecorations from '@/components/Buttons/Decoration/BtnDecorations.vue'
import cvalexandrepiette from '@/assets/img/background/bgd1.jpg'
import {mapGetters} from 'vuex'

export default {
    name: 'Button',
    components:{
        //BtnDecorations
    },
    data:function(){
        return{
            triggerAnimation: true,
            btnLink: ""
        }
    },
    computed:{
        ...mapGetters({
            myState: 'getMyState'
        }),

        linkBtns(){
            return this.$store.state.linkBtns;
        }
    },
    props:{
        btnTitle:{
        type: String,
        required: true
        }
    },
    methods:{
        openLink(){
            if(this.btnTitle == "contact me"){
                return this.btnLink = this.linkBtns.mail;
            }
            if(this.btnTitle == "download my cv"){
                return this.btnLink = cvalexandrepiette
            }
        }
    }
}
</script>