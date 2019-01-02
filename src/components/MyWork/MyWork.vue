<template>
  <div class="Container--my-work">
    <SectionHeader id="my-work" :sectionTitle="title"></SectionHeader>
    <span class="grid-container container-section-content">
      <Samples v-bind:key="sample.name" v-for="sample in samples"
      :alt="sample.name" :title="sample.name"
      :link="sample.link" :iconUrl="sample.iconUrl"/>
    </span>
  </div>
</template>

<script>

import SectionHeader from '@/components/SectionHeader/SectionHeader.vue'
import Samples from '@/components/MyWork/Components/Samples.vue'

export default {
  name: 'MyWork',
  components:{
    SectionHeader,
    Samples
  },
  data: function(){
    return{
      title: "MY WORK",
      samples:{
        github:{
          name: 'github',
          link: 'https://github.com/palexandrep',
          iconUrl: require('@/assets/img/links/github.svg'),
          picture: '#'
        },
        behance:{
          name: 'behance',
          link: 'https://www.behance.net/ALEXANDREPIETTE',
          iconUrl: require('@/assets/img/links/behance.svg'),
          picture: '#'
        },
        codepen:{
          name: 'codepen',
          link: 'https://codepen.io/Smog/',
          iconUrl: require('@/assets/img/links/codepen.svg'),
          picture: '#'
        },
      }
    }
  },
  methods:{
  }
}
</script>
