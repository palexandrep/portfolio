<template>
    <span>
        <SubSectionTitle :title='distributeTitle()' />
        <div class="container-preferences container--sub-section">
            <Microscope/>
            <span class="container-btn__switch">
                <SwitchBtns v-bind:key="btn.text" v-for="btn in switchBtnsVal.switchs.preferences" :switchValue="btn.value" />
            </span>
        </div>
    </span>
</template>

<script>

import SwitchBtns from "@/components/Buttons/SwitchBtns.vue"
import Microscope from "@/components/MySkills/Preferences/Components/Microscope.vue"
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"
import {mapGetters} from "vuex"

export default {
    name: 'Preferences',
    components:{
        SwitchBtns,
        Microscope,
        SubSectionTitle
    },
    data:function(){
        return{
            titleSubSection: 'PREFERENCES'
        }
    },
    computed:{
        ...mapGetters({
            myState: 'getMyState'
        }),

        switchBtnsVal(){
            return this.$store.state.switchBtnsVal
        }
    },
    methods:{
        distributeTitle: function(){
            return this.titleSubSection
        }
    }
}
</script>

