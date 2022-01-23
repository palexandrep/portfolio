<template>
    <div class="container--btn__call-to">
        <!--<div class="bubble-container bubble-container--top">
            <BtnDecorations/>
        </div>-->
        <a href="mailto:piette.alexandre@gmail.com" class="btn btn__call-to title title__small shadow">{{btnTitle}}</a>
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
    props:{
        btnTitle:{
        type: String,
        required: true
        }
    },
    methods:{
        openLink(){
            if(this.btnTitle == "contact me"){
                this.btnLink = "mailto:piette.alexandre@gmail.com"
            }
            if(this.btnTitle == "download my cv"){
                this.btnLink = cvalexandrepiette
            }
        }
    }
}
</script>