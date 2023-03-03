<template>
    <input v-model="msg"/>
    <button @click="sendMsg">传值</button>
</template>

<script setup>

import { ref } from 'vue';
import Mitt from './mitt.js'

const msg = ref('haha')
const sendMsg = () => {
    console.log('msg = ')
    console.log(msg.value)
    Mitt.emit('sendMsg', msg.value)
}
</script>