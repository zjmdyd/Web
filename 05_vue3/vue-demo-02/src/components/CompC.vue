<template>
    <div>
        <p>Current component: C</p>
        <span>count: {{ count }}</span>
        <button @click="count++">+</button>
    </div>
</template>
<script setup>

import { ref, onActivated, onDeactivated } from 'vue';

const count = ref(0)

// 在首次挂载、
// 以及每次从缓存中被重新插入的时候调用
onActivated(() => {
    console.log('C_onActivated')
})

// 在从 DOM 上移除、进入缓存
// 以及组件卸载时调用
onDeactivated(() => {
    console.log('C_onDeactivated')
})
</script>