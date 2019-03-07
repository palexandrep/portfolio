<template>
  <div class="container-locker">
      <span class="decoration-locker decoration-locker__top"></span>
        <a @click.prevent="sectionExpand()" v-smooth-scroll="{ duration: 500, offset: 0, container: '' }" 
        :href="sectionAnchor" class="box-decoration__circle" :class="sectionName">
          <svg class="locker" x="0px" y="0px" width="30" height="40">
              <path class="locker-color locker__head" d="M8.3,12.2c0-1.8,0.8-3.2,2-4.5c1.2-1.2,2.8-1.9,4.6-1.9c1.8,0,3.3,0.6,4.5,1.9
                c1.2,1.2,1.9,2.7,1.9,4.5c0,0.4,0.2,0.6,0.5,0.9c0.3,0.3,0.7,0.3,1.1,0.3h1.6c0.4,0,0.8,0.1,1.1-0.3c0.3-0.3,0.5-0.6,0.5-1
                c0-3.1-1.1-5.6-3.3-7.8c-2.2-2.2-4.8-3.2-7.8-3.2c-3.1,0-5.4,1.1-7.6,3.3c-2.2,2.2-3,4.8-3,7.9v11.2h4V12.2z"/>
              <path class="locker-color locker__body" d="M27.1,39.3H3.2c-1.4,0-2.6-1.1-2.6-2.6V23.4c0-1.4,1.1-2.6,2.6-2.6h23.9c1.4,0,2.6,1.1,2.6,2.6
                v13.3C29.6,38.2,28.5,39.3,27.1,39.3z"/>
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
      sectionAnchor: 0,
      sectionHeight:{
        about:0,
        skills:0,
        experience:0,
        diploma:0,
        work:0,
        contact:0
      }
    }
  },
  props:{
    sectionName:{
      type: String,
      required: true
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
      
      const toggleSection = function(containerSection, sectionShortHandName, sectionShortHandStoreClosed,
      sectionShortHandStoreAnchor, sectionItem, sectionHeightData, lockerHead){
        
        self.$store.commit(sectionShortHandName)
        if(sectionShortHandStoreClosed === false){
          self.sectionAnchor = sectionShortHandStoreAnchor
          const sectionHeight = sectionItem.offsetHeight
          sectionHeightData = sectionHeight
          //console.log(sectionHeightData)
          lockerHead.classList.add('locker__closed')
          hideSection(containerSection, 0)
        }    
        else{
          console.log('ouverture')
          //console.log(sectionHeightData)
          lockerHead.classList.remove('locker__closed')
          hideSection(containerSection, sectionHeightData)
        }
        const hello = self.sectionHeight.about
      //console.log(hello)
      }
      
      if(thisLocker.classList.contains('locker-about')){
        const sectionItem = document.querySelector('.container--about-me--content'),
              lockerHead = document.querySelector('.locker-about .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--about-me--content', 'about', Sections.about.closed, Sections.about.anchor, sectionItem, self.sectionHeight.about, lockerHead)
      }
      else if(thisLocker.classList.contains('locker-skills')){
        const sectionItem = document.querySelector('.container--skills--content'),
              lockerHead = document.querySelector('.locker-skills .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--skills--content', 'skills', Sections.skills.closed, Sections.skills.anchor, sectionItem, self.sectionHeight.skills, lockerHead)
      }
      else if(thisLocker.classList.contains('locker-experiences')){
        const sectionItem = document.querySelector('.container--experiences--content'),
              lockerHead = document.querySelector('.locker-experiences .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--experiences--content', 'exp', Sections.exp.closed, Sections.exp.anchor, sectionItem, self.sectionHeight.experience, lockerHead)
      }
      else if(thisLocker.classList.contains('locker-diploma')){
        const sectionItem = document.querySelector('.container--diploma--content'),
              lockerHead = document.querySelector('.locker-diploma .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--diploma--content', 'diploma', Sections.diploma.closed, Sections.diploma.anchor, sectionItem, self.sectionHeight.diploma, lockerHead)
      }
      else if(thisLocker.classList.contains('locker-work')){
        const sectionItem = document.querySelector('.container--work--content'),
              lockerHead = document.querySelector('.locker-work .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--work--content', 'work', Sections.work.closed, Sections.work.anchor, sectionItem, self.sectionHeight.work, lockerHead)
      }
      else if(thisLocker.classList.contains('locker-contact')){
        const sectionItem = document.querySelector('.container--contact--content'),
              lockerHead = document.querySelector('.locker-contact .locker__head')
        //console.log(sectionHeight)
        toggleSection('.container--contact--content', 'contact', Sections.contact.closed, Sections.contact.anchor, sectionItem, self.sectionHeight.contact, lockerHead)
      }
    }
  }
}

</script>