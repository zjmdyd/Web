<template>
    <div>{{p1}}</div>
    <button @click="p1++">点击p1++</button>
</template>

<script>

import { onActivated, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, 
    onBeforeUnmount, onUnmounted, ref} from 'vue';

export default({
    setup(){
        console.log('setup')    // 会最先打印,写到方法后边也是一样

        onBeforeMount(()=>{
            console.log('onBeforeMount, 在挂载之前被调用')
        })
        onMounted(()=>{
            console.log('onMounted, 在挂载时被调用')
        })

        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate, 数据更新之前被调用')
        })
        onUpdated(()=>{
            console.log('onUpdated, 数据更改导致的虚拟DOM重新渲染，在这之后会调用该钩子')
        })
        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount, 在卸载组件实例之前调用')
        })
        onUnmounted(()=>{
            console.log('onUnmounted, 卸载组件实例后调用')
        })

        onActivated(()=>{
            console.log('onActivated, ')
        })

        const p1 = ref(0)
        return {p1}
    },
})
</script>