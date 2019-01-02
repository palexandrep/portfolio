<template>
    <div class="container-preferences">
        <Microscope/>
        <SwitchBtns/>
    </div>
</template>

<script>

import SwitchBtns from "@/components/MySkills/Preferences/Components/SwitchBtns.vue"
import Microscope from "@/components/MySkills/Preferences/Components/Microscope.vue"

export default {
    name: 'Preferences',
    components:{
        SwitchBtns,
        Microscope
    }
}
</script>

