<template>
  <div class="home row">
    <Portrait class="col-xs-12 col-md-10 col-lg-2"/>
    <Title/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portrait from '@/components/Portrait/Portrait.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'home',
  components: {
    Portrait,
    Title
  }
}
</script>
