<template>
    <button @click="sendMsg">传值</button>
</template>

<script setup>

import Mitt from './mitt.js'
const sendMsg = () => {
    Mitt.emit('sendMsg', {data:'兄弟的值'})
}
</script>