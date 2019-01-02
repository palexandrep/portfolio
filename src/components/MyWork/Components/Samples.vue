<template>
  <a class="Container-sample" @click="openLink" v-bind:href="link">
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
</template>

<script>



export default {
  name: 'Samples',

  data: function(){
    return{
        linkOpen: false
    }
  },
  props:[
      'title',
      'link',
      'iconUrl',
      'alt'
  ],
  methods:{
      openLink: function(){
        
      }
  }
}
</script>
