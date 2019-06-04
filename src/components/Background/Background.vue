<template>
<span class="container-global--background">
    <span>
        <div class="container--background">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__right">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__left">
            <span class="background-decoration"></span>
            <span class="background-decoration background-decoration_2"></span>
        </div>
    </span>
    <span class="container-group--background__2">
        <div class="container--background">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__right">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__left">
            <span class="background-decoration"></span>
            <span class="background-decoration background-decoration_2"></span>
        </div>
    </span>
    <span class="container-group--background__3">
        <div class="container--background">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__right">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__left">
            <span class="background-decoration"></span>
            <span class="background-decoration background-decoration_2"></span>
        </div>
    </span>
    <span class="container-group--background__4">
        <div class="container--background">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__right">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__left">
            <span class="background-decoration"></span>
            <span class="background-decoration background-decoration_2"></span>
        </div>
    </span><span class="container-group--background__5">
        <div class="container--background">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__right">
            <span class="background-decoration" v-bind:key="iteration" v-for="iteration in repetition"></span>
        </div>
        <div class="container--background container--background__bottom__left">
            <span class="background-decoration"></span>
            <span class="background-decoration background-decoration_2"></span>
        </div>
    </span>
</span>

    
</template>

<script>
export default {
    name: 'Background',
    data:function(){
        return{
            repetition: 2
        }
    }
}
</script>
