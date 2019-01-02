<template>
    <button @mousedown="animateBtnDown()" @mouseup="animateBtnUp()" class="container-btn">
        <svg width="55%" height="55%" viewBox="0 0 300 125" preserveAspectRatio="none">
            <path class="btn--fill" d="M286,113c0,0-68.8,0-136,0c-78.2,0-137,0-137,0s0-15.802,0-50.5C13,33.999,13,12,13,12s59,0,137,0c85,0,136,0,136,0s0,17.598,0,52C286,96.398,286,113,286,113z"/>
        </svg>
        <span class="btn-text title">{{title}}</span>
    </button>
</template>

<script>

import anime from 'animejs'
import {morphBtn} from '@/assets/js/animeFunctions'

export default {
    name: 'Button',
    data:function(){
        return{
            title: 'DOWNLOAD MY CV'
        }
    },
    methods:{

        animateBtnDown: function(){
            const self = this
            const element = self.$el.children[0].children[0].getAttribute('class')

            const points = "M286,113c0,0-68.8-5-136-5c-78.2,0-137,5-137,5s5-15.802,5-50.5C18,33.999,13,12,13,12s59,5,137,5c85,0,136-5,136-5s-5,17.598-5,52C281,96.398,286,113,286,113z"
            //const points ="M316.5,0C213.2,9.2,109.6,9.2,6.6,0l0,0c-9,23.7-8.6,41.6-0.2,64.6c103.3-9.2,206.7-9.2,310.1,0C325,40.9,324.9,23,316.5,0z"
            morphBtn('.'+element, points)
            console.log(self.$el.children[0].children[0]._uid)
        },
        animateBtnUp: function(){
            const self = this
            const element = self.$el.children[0].children[0].getAttribute('class')

            const points = "M286,113c0,0-68.8,0-136,0c-78.2,0-137,0-137,0s0-15.802,0-50.5C13,33.999,13,12,13,12s59,0,137,0c85,0,136,0,136,0s0,17.598,0,52C286,96.398,286,113,286,113z"
            morphBtn('.'+element, points)
        }
    }
}
</script>