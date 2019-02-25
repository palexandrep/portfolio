<template>
    <ul class="container--diploma-items">
        <li v-bind:key="degree.id" v-for="degree in degrees" class="container--diploma-item">
            <img :src="degree.img" :alt="degree.id" class="icon__degree">
            <span class="separation-bar separation-bar__diploma"></span>
            <div class="container--diploma-text post">
                <h4 class="title title__small title">{{degree.title}}</h4>
                <p class="diploma-description text text__mid-color">{{degree.text}}</p>
                <p class="diploma-date text text__mid-color">{{degree.date}}</p>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'DiplomaItem',
    data: function(){
        return{
            degrees:{
                master:{
                    id: "master",
                    title: "Master degree in plastic arts,",
                    text: "visual and spacial in drawing option. ( ESAPV of Mons with dinstinction )",
                    date: "2012 bc",
                    img: require("@/assets/img/monkey.svg")
                },
                design:{
                    id: "design",
                    title: "Web design",
                    text: "training in the CORAIL center of Liège.",
                    date: "2017 bc ( 6 months )",
                    img: require("@/assets/img/human.svg")
                },
                front:{
                    id: "front",
                    title: "Front end",
                    text: "training in the CEPEGRA center of Gosselies.",
                    date: "2012 bc ( 6 months )",
                    img: require("@/assets/img/developer.svg")
                },

            }
        }
    }
}
</script>

