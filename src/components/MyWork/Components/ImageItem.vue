<template>
  <figure v-lazyload class="image__wrapper">
    <img class="image__item" :src="source" alt="random image">
  </figure>
</template>

<script>

import {LazyLoadDirective} from "@/assets/js/javaScript.js";

export default {
    name: 'ImageItem',
    props: {
      source: {
        type: String,
        required: true
      }
    },
    directives: {
      lazyload: LazyLoadDirective
    }
}
</script>
