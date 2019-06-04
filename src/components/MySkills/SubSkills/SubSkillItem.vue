<template>
    <span class="center">
        <ul class="container--sub-skill-list grid-x grid-margin-x grid-margin-y">
            <li v-for="item in items" v-bind:key="item.id" v-bind:class="{ empty: item.isEmpty }" class="container--sub-skill-item container--sub-skill-item__full cell small-4">
                <h5 class="title title__white title__sub-skill">{{item.title}}</h5>
                <p class="sub-skill-item-type text__mid-color text__tiny">{{item.type}}</p>
            </li>
        </ul>
    </span>
</template>

<script>

export default {
  name: 'SubSkillItem',
  data: function(){
        return{
            items: [    
                {
                    title: 'scss',
                    type: '1'
                },
                {
                    title: 'bem',
                    type: '1'
                },
                {
                    title: '',
                    type: '',
                    isEmpty: true
                    },
                {
                    title: '',
                    type: '',
                    isEmpty: true
                },
                {
                    title: 'vue js',
                    type: '2'
                },
                {
                    title: 'react',
                    type: '2'
                },
                {
                    title: 'ajax',
                    type: '2'
                },
                {
                    title: 'jquery',
                    type: '2'
                },
                {
                    title: 'atomic design',
                    type: '3'
                },
                {
                    title: '',
                    type: '',
                    isEmpty: true
                },
                {
                    title: 'wireframe',
                    type: '3'
                },
                {
                    title: '',
                    type: '',
                    isEmpty: true
                },
                {
                    title: 'wordpress',
                    type: '5'
                },
                {
                    title: '',
                    type: '',
                    isEmpty: true
                },
                {
                    title: 'personas',
                    type: '3'
                },
                {
                    title: 'webpack',
                    type: '4'
                },
                {
                    title: 'git',
                    type: '4'
                },
                {
                    title: 'php',
                    type: '5'
                } 
            ]
        }
    }
}
</script>