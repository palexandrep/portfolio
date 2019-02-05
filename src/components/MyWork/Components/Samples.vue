<template>
    <div>
        <SubSectionTitle :title='distributeTitle()' />
        <ul class="container--sub-section container--samples" >
            <li class="grid-x" v-bind:key="sample.id" v-for="sample in samples" >
                <a class="Container-sample cell small-offset-1 small-1" @click.prevent="openLink" v-bind:href="sample.link">
                    <div class="sample--plug-sample">
                        <img class="sample--plug-img-sample" v-bind:src="sample.picture" v-bind:alt="sample.title">
                    </div>
                    <div class="sample--body-sample">
                        <span class="body-sample--empty-space-sample"></span>
                        <div class="body-sample--text-sample-container">
                            <h5 class="text-sample-container--text-sample text title__white title__big">{{sample.title}}</h5>
                        </div>
                    </div>
                </a>
                <ImageItem class="cell small-7" :source="sample.iconUrl"/>
            </li>
        </ul>
    </div>
    
</template>

<script>

import ImageItem from '@/components/MyWork/Components/ImageItem.vue'
import { mapGetters } from 'vuex'
import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue"

export default {
  name: 'Samples',
  components:{
      ImageItem,
      SubSectionTitle
  },

  data: function(){
    return{
        linkOpen: false,
        titleSubSection: 'SAMPLES'
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
    methods:{
        distributeTitle: function(){
            return this.titleSubSection
        },
        openLink: function(e){
        
        }
    }
}
</script>
