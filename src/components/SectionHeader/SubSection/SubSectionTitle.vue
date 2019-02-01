<template>
    <span class="container--sub-title">
        <h4 class="title sub-title title__white">{{title}}</h4>
    </span>
</template>

<script>

import {mapGetters} from 'vuex'

    export default {
        name: 'SubSectionTitle',
        props:{
            title:{
                required: true,
                type: 'string'
            }
        },
        computed:{
            ...mapGetters({
                myState: 'getMyState'
            }),
        }
    }
</script>
