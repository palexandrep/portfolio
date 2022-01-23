<template>
    <span class="container--sub-title">
        <h4 class="title sub-title title__white">{{title}}</h4>
    </span>
</template>

<script>
    export default {
        name: 'SubSectionTitle',
        props:{
            title:{
                required: true
            }
        }
    }
</script>
