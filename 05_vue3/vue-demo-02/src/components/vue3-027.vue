<template>
    <div>
     <!-- :value绑定只是v-bind单向的数据绑定，当用户手动切换时，
        组件内部修改了对应的值，但是呢，data中的值并没有变化； 
        v-model的绑定是双向的，组件内部的值变化了，也会同步到页面的data中 -->
        <label>
            <input type="radio" v-model="activeComponent" :value="CompA" />A
        </label>
        <label>
            <input type="radio" v-model="activeComponent" :value="CompB" />B
        </label>
        <Transition name="fade" mode="out-in">
            <component :is="activeComponent"></component>
        </Transition>
    </div>

</template>

<script setup>
import { shallowRef } from 'vue'
import CompA from './CompA.vue'
import CompB from './CompB.vue'

const activeComponent = shallowRef(CompA)
console.log(CompB)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>