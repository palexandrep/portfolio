<template>
  <div class="home">
    <Portrait/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait.vue'

export default {
  name: 'home',
  components: {
    Portrait
  }
}
</script>
