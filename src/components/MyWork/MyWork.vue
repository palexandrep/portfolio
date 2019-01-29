<template>
  <div class="Container--my-work">
    <SectionHeader id="my-work" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <Samples v-bind:key="sample.id" v-for="sample in samples"
      :alt="sample.name" :title="sample.name"
      :link="sample.link" :iconUrl="sample.iconUrl" :id="sample.id" :imgUrl="sample.picture"/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Samples from '@/components/MyWork/Components/Samples.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'MyWork',
  components:{
    SectionHeader,
    Samples
  },
  data: function(){
    return{
      title: "MY WORK",
    /*  samples:{
        github:{
          id: 'sample1',
          name: 'github',
          link: 'https://github.com/palexandrep',
          iconUrl: require('@/assets/img/links/github.svg'),
          picture: '#'
        },
        behance:{
          id: 'sample2',
          name: 'behance',
          link: 'https://www.behance.net/ALEXANDREPIETTE',
          iconUrl: require('@/assets/img/links/behance.svg'),
          picture: '#'
        },
        codepen:{
          id: 'sample3',
          name: 'codepen',
          link: 'https://codepen.io/Smog/',
          iconUrl: require('@/assets/img/links/codepen.svg'),
          picture: '#'
        },
      }*/
    }
  },
  computed:{
    ...mapGetters({
      setState: 'getMyState'
    }),

    samples(){
      return this.$store.state.samples
    }
  },
  mounted:function(){
    const lol = document.querySelector('#sample1')
  },
  methods:{
  }
}
</script>
