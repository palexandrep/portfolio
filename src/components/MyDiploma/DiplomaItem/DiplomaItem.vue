<template>
    <div class="container--diploma-items">
            <img :src="degree.img" :alt="degree.id+'Img'" v-bind:key="degree.id" v-for="degree in degrees" class="container--diploma-item icon__degree">
            <span class="container--diploma-item separation-bar separation-bar__diploma"></span>
            <span class="container--diploma-item separation-bar separation-bar__diploma"></span>
            <span class="container--diploma-item separation-bar separation-bar__diploma"></span>
            <div v-bind:key="degree.id+'text'" v-for="degree in degrees" class="container--diploma-item container--diploma-text post">
                <h4 class="title title__small title text__normal">{{degree.title}}</h4>
                <p class="diploma-description text text__normal text__mid-color">{{degree.text}}</p>
                <p class="diploma-date text text__mid-color">{{degree.date}}</p>
            </div>
    </div>
</template>

<script>
export default {
    name: 'DiplomaItem',
    data: function(){
        return{
            degrees:{
                master:{
                    id: "master",
                    title: "Master degree",
                    text: "in plastic arts. (ESAPV of Mons with dinstinction)",
                    date: "2012 bc",
                    img: require("@/assets/img/monkey.svg")
                },
                design:{
                    id: "design",
                    title: "Web design",
                    text: "training in the CORAIL center of Liège.",
                    date: "2017 bc (6 months)",
                    img: require("@/assets/img/human.svg")
                },
                front:{
                    id: "front",
                    title: "Front end",
                    text: "training in the CEPEGRA center of Gosselies.",
                    date: "2012 bc (6 months)",
                    img: require("@/assets/img/developer.svg")
                },

            }
        }
    }
}
</script>

