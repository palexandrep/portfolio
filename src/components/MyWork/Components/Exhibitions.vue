<template>
    <SubSectionTitle :title="title"/>
</template>

<script>

import SubSectionTitle from "@/components/SectionHeader/SubSection/SubSectionTitle.vue" 

export default {
    name: "Exhibitions",
    components:{
        SubSectionTitle
    },
    data:function(){
        return{
            title: "EXHIBITIONS"
        }
    }

}
</script>
