<template>
  <div class="home row">
    <Header/>
    <Portrait/>
    <Title/>
    <DNA/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header/Header.vue'
import Portrait from '@/components/AboutMe/Portrait/Portrait.vue'
import Title from '@/components/Title.vue'
import DNA from '@/components/DNA.vue'

export default {
  name: 'home',
  components: {
    Header,
    Portrait,
    Title,
    DNA
  }
}
</script>
