<template>
  <div class="container--about-me">
    <SectionHeader/>
    <Portrait/><PresentationText/>
    <Button/>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Portrait from '@/components/AboutMe/Portrait/Portrait.vue'
import PresentationText from '@/components/AboutMe/PresentationText.vue'
import Button from '@/components/Button.vue'

export default {
    name: 'AboutMe',
    components:{
        SectionHeader,
        Portrait,
        PresentationText,
        Button
    }
}

</script>
