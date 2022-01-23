<template>
    <div>
        <p v-bind:key="paragraph.id" v-for="paragraph in myParagraphs.paragraphs" class="presentation-text text text__bgc-color">
            {{paragraph}}
        </p>
    </div>
</template>

<script>

import { mapGetters } from "vuex"

export default {
    name: 'PresentationText',
  computed:{
    ...mapGetters({
      myState: 'getMystate'
    }),
    myParagraphs(){
      return this.$store.state.presentation
    }
  }
}

</script>