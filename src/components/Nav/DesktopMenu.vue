<template>
    <ul class="container-menu__desktop">
      <li class="menu--item title__pale text__tiny" v-bind:key="section.id" v-for="section in sections">
        <h3 class="menu--item-text__desktop">{{section.name}}</h3>
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