<template>
    <div class="menu">
        <MobileMenu v-if="$mq === 'mobile'"/>
        <DesktopMenu v-else/>
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