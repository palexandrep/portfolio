<template>
    <span class="container-microscope-cell">
        <div ref="cell" class="microscope--cell" v-bind:key="'microscope-cell-'+n" v-for="n in switchParam.number"></div>
    </span>
</template>

<script>

import { randomNum } from "@/assets/js/javaScript.js"
import { animCell } from "@/assets/js/animeFunctions.js"

export default {
    name: 'MicroscopeCells',

    data: function(){
        return{
            switchParam:{
                number: 10
            },
            cellParam:{
                position: 100,
                size: 9
            }
        }
    },
    props:{
        switchNumber:{
            type: String,
            required: false
        }
    },
    methods:{
        getCoord(){
            const iteration = this.switchParam.number
            // random function --> iteration - max - min - allow negative
            const coordLat = randomNum(iteration,100,10,true),
                  coordLong = randomNum(iteration,100,20,true),
                  sizeRatio = randomNum(iteration,9,2,false),
                  opacityCell = randomNum(iteration,3,2,false),
                  timming = randomNum(iteration,7,4,false),
                  cellFocus = randomNum(iteration,2,0,false)

            for (let i = 1; i < this.switchParam.number; i++){
                let cell = this.$el.querySelector(".microscope--cell:nth-child("+[i]+")")
                cell.style.top = coordLat[i]-15+"px"
                cell.style.left = coordLong[i]-40+"px"
                cell.style.filter = "blur("+cellFocus[i]+"px)"
                cell.style.transform = "rotate("+coordLat[i]+"deg) scale(1."+sizeRatio[i]+")"
                cell.style.opacity = "0."+(opacityCell[i])
                // animation parameters --> el, maxLat, minLat, maxLong, minLong, delay, time
                animCell( cell, -10, 10, 10, -10, (sizeRatio[i]+'000'), (timming[i]+'000'))
            }
        }
    },
    mounted(){

        this.getCoord()

        const self = this
        if(this.$props.switchNumber=='switchOne'){
            self.switchParam.number= self.switchParam.number-5
        }
        else if(this.$props.switchNumber=='switchTwo'){
            self.switchParam.number= self.switchParam.number
        }
        else if(this.$props.switchNumber=='switchThree'){
            self.switchParam.number= self.switchParam.number+5
        }
    },
    updated(){
        this.getCoord()
    }
}
</script>