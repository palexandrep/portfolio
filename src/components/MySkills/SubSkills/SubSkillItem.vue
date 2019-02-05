<template>
    <span class="center">
        <ul class="container--sub-skill-list grid-x grid-margin-x grid-margin-y">
            <li v-for="item in items" v-bind:item="item" v-bind:key="item.id" class="container--sub-skill-item cell small-4">
                <h5 class="title title__white title__sub-skill">{{item.subSkill.title}}</h5>
                <p class="sub-skill-item-type text__mid-color text__tiny">{{item.subSkill.type}}</p>
            </li>
        </ul>
    </span>
</template>

<script>

export default {
  name: 'SubSkillItem',
  data: function(){
        return{
            totalItems: 20,
            nbItems: '',
            items: [
                {subSkill:{
                    title: 'SCSS',
                    type: '1'
                    }
                },
                {subSkill:{
                    title: 'BEM',
                    type: '1'
                    }
                },
                {subSkill:{
                    title: 'VUE JS',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'REACT',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'AJAX',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'JQUERY',
                    type: '2'
                    }
                },
                {subSkill:{
                    title: 'ATOMIC DESIGN',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'WIREFRAME',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'WORDPRESS',
                    type: '5'
                    }
                },
                {subSkill:{
                    title: 'PERSONAS',
                    type: '3'
                    }
                },
                {subSkill:{
                    title: 'WEBPACK',
                    type: '4'
                    }
                },
                {subSkill:{
                    title: 'GIT',
                    type: '4'
                    }
                },
                {subSkill:{
                    title: 'PHP',
                    type: '5'
                    }
                },
            ]
        }
    },
    mounted: function(){
       /* this.nbItems = this.items.length
        this.emptyItems = this.totalItems-this.nbItems
        const listItemsFull = document.querySelectorAll('.container--sub-skill-item')
        const createItem = (itemToCreate,options) => document.createElement(itemToCrete,[options])
        
        //const itemEmpty = document.createElement(li[])
        console.log(listItemsFull[3])*/
    }

}
</script>