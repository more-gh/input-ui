<template>
    <div class='deng-toast'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'dengToast'
}
</script>
<style scoped>
.deng-toast {
    display: inline-block;text-align: center;border-radius: 7px;
    background-color: #000;opacity: 0.6;padding: 13px 17px;color: #fff;
}
</style>
