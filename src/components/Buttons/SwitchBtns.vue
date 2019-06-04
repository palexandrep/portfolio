<template>
    <div class="btn__switch btn">
        <p class="switch-btn-text title text__normal title__bgc-color">{{switchValue}}</p>
    </div>
</template>

<script>
export default {
    name: "SwitchBtns",
    props:{
        switchValue:{
            required: true,
            typeOf: "string"
        }
    }
}
</script>

