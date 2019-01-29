<template>

    <div class="container--btn__call-to">
        <div id="coucou" class="bubble-container bubble-container--top">
            <BtnDecorations/>
        </div>
        <a href="./img/cvalexandrepiette.pdf" download class="btn btn__call-to title title__small" @mousedown="enterBtn()" @mouseup="leaveBtn()">{{btnTitle}}</a>
        <div class="bubble-container bubble-container--bottom">
            <BtnDecorations/>
        </div>
    </div>

</template>

<script>

import anime from 'animejs'
import {animateBtn} from '@/assets/js/animeFunctions'
import {btnDecorationAnimate} from '@/assets/js/animeFunctions'
import BtnDecorations from '@/components/Buttons/Decoration/BtnDecorations.vue'


export default {
    name: 'Button',
    components:{
        BtnDecorations
    },
    data:function(){
        return{
            triggerAnimation: true
            //btnLink: require('@/assets/img/cvalexandrepiette.pdf') 
        }
    },
    computed:{

        moveBubbles: function (){
            const self = this
            console.log('ok')
            let bubbles = document.querySelectorAll('.bubble')
            for(const i in bubbles){
                const randomize = (max) => Math.floor(Math.random() * Math.floor(max));
            
                let randomX = randomize(40)
                let randomY = randomize(40)
                btnDecorationAnimate(bubbles[i],randomX,randomY,2000,0)
            }
            return self.triggerAnimation != self.triggerAnimation
           //console.log(self.triggerAnimation)

        }
        
    },
    mounted: function(){
        const self = this
        const hello = function(){
            console.log(self.triggerAnimation)
        return self.triggerAnimation != self.triggerAnimation
        
        }()
        
        //vm.moveBubbles()
    },
    props:{
        btnTitle:{
        type: String,
        required: true
        }
    },
    methods:{
        enterBtn: function(){
            const Btn = this.$el 
            animateBtn(Btn,0.3,1000)
        },

        leaveBtn: function(){
            const Btn = this.$el
            animateBtn(this.$el,1,400)
        }
    }
}

</script>