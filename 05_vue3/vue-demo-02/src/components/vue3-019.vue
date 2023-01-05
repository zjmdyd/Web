<template>
    <div>
        <input v-model="msgInput" />
        <ChildComp />
    </div>
    
</template>

<script setup>
import ChildComp from './ChildComp.vue'
import {ref, provide, computed } from 'vue';

const msgInput = ref('hello')
provide('message', msgInput)

computed(() => {
    return msgInput;
})

</script>