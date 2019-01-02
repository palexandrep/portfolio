<template>
    <span>
        <div class="microscope--cell">
        
        </div>
    </span>
</template>

<script>

export default {
    name: 'MicroscopeCells',

    data: function(){
        return{
            switchOne:{
                number: 15,
                agitation: "big"
            },
            switchTwo:{
                number: 10,
                agitation: "medium"
            },
            switchThree:{
                number: 5,
                agitation: "small"
            },
        }
    },
    methods:{

    }
}
</script>

