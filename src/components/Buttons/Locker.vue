<template>
  <div class="container-locker">
      <span class="decoration-locker decoration-locker__top"></span>
        <a @click.prevent="sectionExpand()" v-smooth-scroll="{ duration: 500, offset: 0, container: '' }" :href="sectionAnchor" class="box-decoration__circle" :class="sectionName">
          <svg version="1.1" id="locker" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30" height="40">
            <pattern  x="-465.7" y="-260.6" width="87.1" height="80.8" patternUnits="userSpaceOnUse" viewBox="0 -80.8 87.1 80.8" style="overflow:visible;">
              <g>
                <polygon class="st0" points="0,-80.8 87.1,-80.8 87.1,0 0,0 		"/>
                <polygon class="locker-color" points="87.1,0 0,0 0,-80.8 87.1,-80.8 		"/>
              </g>
            </pattern>
            <g>
              <pattern   patternTransform="matrix(1 0 0 1 449.7088 -1294.8259)">
              </pattern>
              <path class="locker-color" d="M8.3,12.2c0-1.8,0.8-3.2,2-4.5c1.2-1.2,2.8-1.9,4.6-1.9c1.8,0,3.3,0.6,4.5,1.9
                c1.2,1.2,1.9,2.7,1.9,4.5c0,0.4,0.2,0.6,0.5,0.9c0.3,0.3,0.7,0.3,1.1,0.3h1.6c0.4,0,0.8,0.1,1.1-0.3c0.3-0.3,0.5-0.6,0.5-1
                c0-3.1-1.1-5.6-3.3-7.8c-2.2-2.2-4.8-3.2-7.8-3.2c-3.1,0-5.4,1.1-7.6,3.3c-2.2,2.2-3,4.8-3,7.9v11.2h4V12.2z"/>
              <pattern   patternTransform="matrix(1 0 0 1 450.0973 -1294.894)">
              </pattern>
              <path class="locker-color" d="M27.1,39.3H3.2c-1.4,0-2.6-1.1-2.6-2.6V23.4c0-1.4,1.1-2.6,2.6-2.6h23.9c1.4,0,2.6,1.1,2.6,2.6
                v13.3C29.6,38.2,28.5,39.3,27.1,39.3z"/>
            </g>
          </svg>
        </a>
      <span class="decoration-locker decoration-locker__bottom"></span>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import { hideSection } from '@/assets/js/animeFunctions.js'

export default {
  name: 'Locker',
  data: function(){
    return{
      sectionAnchor: ''
    }
  },
  props:{
    sectionName:{
      type: String,
      required: false
    }
  },
  computed:{
    ...mapGetters({
      myState: 'getMyStateSection'
    }),

    sections(){
      return this.$store.state.sections
    }
  },
  methods:{
    sectionExpand: function(e){
      const self = this,
      thisLocker = this.$el.children[1],
      Sections = self.sections
      const toggleSection = function(containerSection, sectionShortHandName, sectionShortHandStoreClosed, sectionShortHandStoreAnchor){
        const thisSection = document.querySelector(containerSection).children[1]
        
        self.$store.commit(sectionShortHandName)
        if(sectionShortHandStoreClosed === false){
          self.sectionAnchor = sectionShortHandStoreAnchor
          hideSection(containerSection, 0)
        }
        else{
          hideSection(containerSection, '100%')
        }
      }
      
      if(thisLocker.classList.contains('locker-about')){
        toggleSection('.container--about-me--content', 'about', Sections.about.closed, Sections.about.anchor)
      }
      else if(thisLocker.classList.contains('locker-skills')){
        toggleSection('.container--skills--content', 'skills', Sections.skills.closed, Sections.skills.anchor)
      }
      else if(thisLocker.classList.contains('locker-experiences')){
        toggleSection('.container--experiences--content', 'exp', Sections.exp.closed, Sections.exp.anchor)
      }
      else if(thisLocker.classList.contains('locker-diploma')){
        toggleSection('.container--diploma--content', 'diploma', Sections.diploma.closed, Sections.diploma.anchor)
      }
      else if(thisLocker.classList.contains('locker-work')){
        toggleSection('.container--work--content', 'work', Sections.work.closed, Sections.work.anchor)
      }
      else if(thisLocker.classList.contains('locker-contact')){
        toggleSection('.container--contact--content', 'contact', Sections.contact.closed, Sections.contact.anchor)
      }
    }
  }
}

</script>