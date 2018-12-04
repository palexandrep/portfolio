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
            const points = "M286,113c0,0-68.8-5-136-5c-78.2,0-137,5-137,5s5-15.802,5-50.5C18,33.999,13,12,13,12s59,5,137,5c85,0,136-5,136-5s-5,17.598-5,52C281,96.398,286,113,286,113z"
            morphBtn('.container-btn path', points)
        },
        animateBtnUp: function(){
            const points = "M286,113c0,0-68.8,0-136,0c-78.2,0-137,0-137,0s0-15.802,0-50.5C13,33.999,13,12,13,12s59,0,137,0c85,0,136,0,136,0s0,17.598,0,52C286,96.398,286,113,286,113z"
            morphBtn('.container-btn path', points)
        }
    }
}
</script>