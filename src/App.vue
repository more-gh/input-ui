<template>
<div>
    <deng-input></deng-input>
    <deng-input :disabled=true></deng-input>
    <deng-input v-model="text"></deng-input>
    <p>{{text}}</p>
    <deng-toast ref='toast'>aaa</deng-toast>
    <deng-button :type="'warn'" @click="onButtonWClick">warn</deng-button>
    <deng-button :type="'warn'" @click="onButtonWClick" :disabled="true">warn</deng-button>
    <deng-button @click="onButtonClick" :disabled="true">default</deng-button>
    <deng-button @click="onButtonClick">default</deng-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            text: 'test v-module',
        }
    },
    mounted() {
        this.$refs.toast.$emit('show')
    },
    methods: {
        onButtonWClick() { console.log('btn w click')},
        onButtonClick() {console.log('btn click')}
    }
}
</script>

<style>

</style>
