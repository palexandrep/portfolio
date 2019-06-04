<template>
    <div>
        <SubSectionTitle :title='distributeTitle()' />
        <ul class="container--sub-section container--samples" >
            <li class="grid-x container--samples-and-images" v-bind:key="sample.id" v-for="sample in samples" >
                <a class="container-sample" @click.prevent="openLink" v-bind:href="sample.link">
                    <div class="sample--plug-sample">
                        <img class="sample--plug-img-sample" v-bind:src="sample.picture" v-bind:alt="sample.title">
                    </div>
                    <div class="sample--body-sample">
                        <span class="body-sample--empty-space-sample"></span>
                        <div class="body-sample--text-sample-container">
                            <h5 :id="'sample-'+sample.title" class="text-sample-container--text-sample text title__mid-color title__big title">{{sample.title}}</h5>
                        </div>
                    </div>
                </a>
                <span class="container-sample-decoration">
                    <span class="sample-decoration__left"></span>
                    <span class="sample-decoration__right"></span>
                </span>
                <ImageItem :source="sample.iconUrl"/>
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
        titleSubSection: 'samples'
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
