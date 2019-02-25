<template>
    <span class="center">
        <ul class="container--sub-skill-list grid-x grid-margin-x grid-margin-y">
            <li v-for="item in items" v-bind:item="item" v-bind:key="item.id" class="container--sub-skill-item container--sub-skill-item__full cell small-4">
                <h5 class="title title__white title__sub-skill">{{item.subSkill.title}}</h5>
                <p class="sub-skill-item-type text__mid-color text__tiny">{{item.subSkill.type}}</p>
            </li>
            <span v-for="i in ghostItems" v-bind:key="i" class="container--sub-skill-item container--sub-skill-item__empty cell small-4"></span>
        </ul>
        <button @click.prevent='ok()' >push</button>
    </span>
</template>

<script>

export default {
  name: 'SubSkillItem',
  data: function(){
        return{
            ghostItems: 5,
            items: [
                {subSkill:{
                    title: 'scss',
                    type: '1'
                    }
                },
                {subSkill:{
                    title: 'bem',
                    type: '1'
                    }
                },
                {subSkill:{
                    title: 'vue js',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'react',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'ajax',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'jquery',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'atomic design',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'wireframe',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'wordpress',
                    type: '5'
                    }
                },
                {subSkill:{
                    title: 'personas',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'webpack',
                    type: '4'
                    }
                },
                {subSkill:{
                    title: 'git',
                    type: '4'
                    }
                },
                {subSkill:{
                    title: 'php',
                    type: '5'
                    }
                },
            ]
        }
    },
    mounted: function(){
      /* const subSkillsList = document.querySelectorAll('.container--sub-skill-item')
       const subSkillsListEmpty = document.querySelectorAll('.container--sub-skill-item__empty')
       const subSkillsListFull = document.querySelectorAll('.container--sub-skill-item__full')
           //const distributeEmpy = subSkillsListEmpty.map( x => subSkillsListFull.push(x))
           //distributeEmpy()

           const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

        const list = []
        const list2 = []
        const lol = function(){
            list.push(3)
            list2.push(subSkillsListEmpty)
            //const map1 = list2.map( x => list.splice(getRandomInt(5),0,x))
            const splice1 = list.splice(1,0,4)

            console.log(splice1)
        }()*/
       
       
    },
    methods:{
        ok : function(){
            const list = [1,2]
           //list.push(3)
            const yep = list.slice(1,0,4)
            console.log(yep)
        }
    }

}
</script>