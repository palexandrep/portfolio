<template>
    <div class="menu">
        <MobileMenu/>
        <!--<DesktopMenu/>-->
    </div>
</template>

<script>

import DesktopMenu from '@/components/Nav/DesktopMenu.vue'
import MobileMenu from '@/components/Nav/MobileMenu.vue'

export default {
  name: 'Nav',
  components:{
      DesktopMenu,
      MobileMenu
  }

}
</script>