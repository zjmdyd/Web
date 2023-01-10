<template>
    <div>
        <p>Current component: D</p>
        <span>Message is: {{ msg }}</span>
        <input v-model="msg"/>
    </div>
</template>
<script setup>

import { ref, onActivated, onDeactivated } from 'vue';

const msg = ref('')

// 在首次挂载、
// 以及每次从缓存中被重新插入的时候调用
onActivated(() => {
    console.log('D_onActivated')
})

// 在从 DOM 上移除、进入缓存
// 以及组件卸载时调用
onDeactivated(() => {
    console.log('D_onDeactivated')
})

</script>