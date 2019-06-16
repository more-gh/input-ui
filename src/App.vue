<template>
<div>
    <deng-input></deng-input>
    <deng-input :disabled=true></deng-input>
    <deng-input v-model="text"></deng-input>
    <p>{{text}}</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            text: 'test v-module'
        }
    },
}
</script>

<style>

</style>
