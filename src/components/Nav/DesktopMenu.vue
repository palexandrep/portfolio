<template>
    <ul class="container-menu__desktop">
      <li class="menu--item text__mid-color" v-bind:key="section.id" v-for="section in sections">
        <h3>{{section.name}}</h3>
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
  },
  methods:{
  }
}
</script>