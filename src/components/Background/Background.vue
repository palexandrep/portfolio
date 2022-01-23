<template>

    <div class="container-global--background">

        <div class="container--background container--background " v-bind:class="{ 'container--background--pair' : index % 2 == 1 }" v-bind:key="iteration" v-for="(iteration, index) in backgroundOptions.repetitionV">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in backgroundOptions.repetitionH"></span>
        </div>
      
    </div>

</template>

<script>

import {randomNum} from '@/assets/js/javaScript.js'

export default {
    name: 'Background',
    data:function(){
        return{
            backgroundOptions: {
                repetitionH: 10,
                repetitionV: 0,
                holes: 0,
                variations: 0
            },
            lineV: [],
            holesList: [],
            variationsList: []
        }
    },
    methods: {
        
        setClass(){
            const itemsList = document.querySelectorAll(".background-decoration");

            for(var i=0; i < itemsList.length ; i++){
                
                
                if(this.holesList.includes(i)){
                    itemsList[i].className += ' background-item--empty';
                }
                else if(this.variationsList.includes(i)){

                    if(i >= Math.round(itemsList.length/3)){
                        itemsList[i].className += ' background-item--variation-small';
                    }
                    else{
                        itemsList[i].className += ' background-item--variation-big';
                    }

                }
                if(this.lineV.includes(i)){
                    itemsList[i].className += ' background-item--red';
                }
            }
        },
        handleResize() {
            this.backgroundOptions.repetitionH = Math.round( window.innerWidth/50-1);
            this.backgroundOptions.repetitionV = Math.round(window.innerHeight/50);
            this.backgroundOptions.holes = Math.round(window.innerWidth/5);
            this.backgroundOptions.variations = Math.round(window.innerWidth/30);

            const itemsDisabled = randomNum(this.backgroundOptions.holes, this.backgroundOptions.repetitionH*this.backgroundOptions.repetitionV, 1, false),
            itemsVariations = randomNum(this.backgroundOptions.variations, this.backgroundOptions.repetitionH*this.backgroundOptions.repetitionV, 1, false),
            middleHoles = Math.round(this.backgroundOptions.repetitionH/2);
            this.holesList = itemsDisabled;
            this.variationsList = itemsVariations;
            let lines = [];

            for(var j=0; j < this.backgroundOptions.repetitionV ; j++){
                    const actualLine = j*middleHoles;
                    lines.push(actualLine,actualLine+1,actualLine-1);
                }

            this.lineV = lines;
        }
    },
    computed: {
        
    },
    mounted() {
        window.addEventListener('resize', this.setClass);
        this.setClass();
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
        window.addEventListener('resize', this.setClass);
    },
    
}
</script>