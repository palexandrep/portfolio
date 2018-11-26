<template>

  <button v-on:click="ToggleMenu()" class="container-burger">
    <span class="burger">
      <span class="burger__line burger__line--top"></span>
      <span class="burger__line burger__line--center"></span>
      <span class="burger__line burger__line--bottom"></span>
    </span>  
  </button>

</template>

<script>

export default {
  name: 'Burger',

  data: function(){
    return{
      menuActif: false
    }
  },
  methods:{
    ToggleMenu: function(){
      const burger = document.querySelector('.container-burger');
      if(this.menuActif === false){
        burger.classList.add('container-burger__actif');
        this.menuActif = true;
      }
      else{
        burger.classList.remove('container-burger__actif');
        this.menuActif = false;
      }
    },
  }
}
</script>