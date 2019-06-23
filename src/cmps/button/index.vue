<template>
    <button
        class="deng-button"
        :class="['deng-button-' + type]"
        :disabled="disabled"
        @click="onClick($event)">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'dengButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick(e) { this.$emit('click', e)}
    },
}
</script>
<style scoped>
.deng-button{padding: 10px 15px;border-radius: 5px;}
.deng-button-default {
    background-color: rgb(33, 150, 29);color:#fff
}
.deng-button-default:disabled {opacity: 0.5;}
.deng-button-warn {
    background-color: rgb(150, 29, 29);color:#fff
}
.deng-button-warn:disabled {opacity: 0.5;}
</style>
