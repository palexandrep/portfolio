<template>
    <footer class="footer container-section-title">
        <ScrollArrow :scrollLocation="scrollLinkTarget" :arrowColor="scrollTopColor" :btnDirection="btnDir"/>
        <p class="contributor text text__white text__small">{{contributor}}</p>
    </footer>
</template>

<script>

import ScrollArrow from "@/components/Buttons/ScrollArrow.vue"

export default {
    name: "Footer",
    components:{
        ScrollArrow
    },
    data: function(){
        return{
            btnDir: "btn--arrow__to-the-top",
            scrollTopColor: "btn__blue",
            scrollLinkTarget: "#container--header__global",
            contributor: "@ Alexandre Piette 2018"
        }
    }
}

</script>

