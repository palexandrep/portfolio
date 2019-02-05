<template>
    <div class="cell small-2">
        <span class="container-header--subtitle">
            <h2 class="title__header--subtitle__1 title title__mid-color">{{subTitle.partOne}}</h2>
            <span class="sub-container-header--subtitle">
                <h2 class="title__header--subtitle__2 title title__mid-color">{{subTitle.partTwo}}</h2>
                <P class="text__header--subtitle text text__mid-color">{{subTitle.partThree}}</P>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'SubTitle',
    data: function(){
        return{
            subTitle:{
                partOne: "FRONT",
                partTwo: "END",
                partThree: "developer"
            },
        }
    }
}
</script>
