<template>
    <input 
        class="deng-input"
        @input="onInput($event)"
        :disabled="disabled"
        :placeholder="placeholder"
        :value="value"
    />
</template>
<script>
export default {
    name: 'dengInput',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: [String, Number],
        value: [String, Number]
    },
    methods: {
        onInput(e) { this.$emit('input', e.target.value)}
    },
}
</script>
<style scoped>
.deng-input {
    border: 2px solid #4dd0b2
}
.deng-input:disabled {background-color: aquamarine;opacity: 0.5;}
</style>
