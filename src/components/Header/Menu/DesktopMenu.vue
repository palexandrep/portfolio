<template>
    <ul class="container-menu">
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[0]}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[1]}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[2]}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[3]}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[4]}}</h3>
      </li>
      <li class="menu--item text__mid-color">
        <h3>{{menuItem[5]}}</h3>
      </li>
    </ul>
</template>

<script>


export default {
  name: 'DesktopMenu',
  data: function(){
    return{
      menuItem: [
        'ABOUT ME',
        'MY SKILLS',
        'MY EXPERIENCES',
        'MY DIPLOMA',
        'MY WORK',
        'CONTACT'
      ]
    }
  },
  methods:{
  }
}
</script>