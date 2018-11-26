<template>
  <div class="header">
    <MobileMenu/>
    <!--<DesktopMenu/>-->
  </div>
</template>

<script>

import MobileMenu from '@/components/Header/Menu/MobileMenu.vue'
import DesktopMenu from '@/components/Header/Menu/DesktopMenu.vue'

export default {
  name: 'Header',
  components:{
    MobileMenu,
    DesktopMenu
  },
  data: function(){
    return{
      
    }
  },
  methods:{
  }
}
</script>
