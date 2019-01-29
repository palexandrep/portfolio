<template>
    <div>
        <a class="Container-sample" @click.prevent="openLink" v-bind:href="link">
            <div class="sample--plug-sample">
                <img class="sample--plug-img-sample" v-bind:src="iconUrl" v-bind:alt="alt">
            </div>
            <div class="sample--body-sample">
                <span class="body-sample--empty-space-sample"></span>
                <div class="body-sample--text-sample-container">
                    <h5 class="text-sample-container--text-sample text title__white title__big">{{title}}</h5>
                </div>
            </div>
        </a>
        <ImageItem :source="imgUrl"/>
    </div>
</template>

<script>

import ImageItem from '@/components/MyWork/Components/ImageItem.vue'

export default {
  name: 'Samples',
  components:{
      ImageItem
  },

  data: function(){
    return{
        linkOpen: false
    }
  },
  props:[
      'title',
      'link',
      'iconUrl',
      'alt',
      'imgUrl'
  ],
  methods:{
      openLink: function(e){
        
      }
  }
}
</script>
