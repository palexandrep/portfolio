<template>
    <ul class="container-menu__desktop">
      <li class="menu--item title__pale text__tiny" v-bind:key="section.id" v-for="section in sections">
        <a class="title__white" v-smooth-scroll="{ duration: 500, offset: 0, container: '' }" :href="section.anchor">
          <h3 class="menu--item-text__desktop" :ref="`section${section.nb}`">{{section.name}}</h3>
        </a>
      </li>
    </ul>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'DesktopMenu',
  computed:{
    ...mapGetters({
      myState: 'getMyState'
    }),

    sections(){
      return this.$store.state.sections
    }
  }
}
</script>