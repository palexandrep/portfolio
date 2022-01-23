<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" class="swiper-container container-swiper__custom-style cell">
                <swiperSlide class="swiper-slide sub-container-microscope" v-bind:key="preference.id" v-for="preference in preferences">
                    <MicroscopeCells v-if="preference.switch=='switchOne'" :switchNumber="preference.switch"/>
                    <MicroscopeCells v-if="preference.switch=='switchTwo'" :switchNumber="preference.switch"/>
                    <MicroscopeCells v-if="preference.switch=='switchThree'" :switchNumber="preference.switch"/>
                    <span class="container--preference-text">
                        <h5 class="preference-text title title__white text__small">{{preference.name}}</h5>
                    </span>           
                </swiperSlide>
        </swiper>
        <!--<span class="container-btn__switch">
            <div class="swiper-pagination swiper-pagination__preferences" slot="pagination"></div>
            <SwitchBtns class="swiper-pagination" v-bind:key="btn.text" v-for="btn in switchBtnsVal.switchs.preferences" :switchValue="btn.value" slot="pagination"  />
        </span>-->
    </div>
</template>

<script>

import MicroscopeCells from "@/components/MySkills/Preferences/Components/MicroscopeCells.vue"
import SwitchBtns from "@/components/Buttons/SwitchBtns.vue"
import {mapGetters} from "vuex"
import { swiper, swiperSlide, Pagination } from 'vue-awesome-swiper'

export default {
    name: 'ContentPreferences',
    components:{
        MicroscopeCells,
        SwitchBtns,
        swiper,
        swiperSlide
    },
    data: function(){
        return{
            swiperOption: {
                pagination:'swiper-pagination__preferences',
                paginationClickable: true,
                lazyLoading: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination:{
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                    hideOnClick: false,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    }
                }
            },
            preferences:{
                pref1:{
                    switch: "switchOne",
                    name: "design",
                    id: "pref-design"
                },
                pref2:{
                    switch: "switchTwo",
                    name: "javascript",
                    id: "pref-javascript"
                },
                pref3:{
                    switch: "switchThree",
                    name: "integration",
                    id: "pref-integration"
                }
            }
        }
    },
    mounted(){
    },
    computed:{
        ...mapGetters({
            myState: 'getMyState'
        }),

        switchBtnsVal(){
            return this.$store.state.switchBtnsVal
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    }
}
</script>

