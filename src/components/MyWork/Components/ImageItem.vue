<template>
  <span class="container--img__sample">
    <figure v-lazyload class="sub-container--img__sample">
      <img class="item--img__sample" :src="source" alt="random image">
    </figure>
  </span>
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
