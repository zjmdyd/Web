<template>
    <div class="demo">
        <label>
            <input type="radio" v-model="current" :value="CompC"/>C
        </label>
        <label>
            <input type="radio" v-model="current" :value="CompD"/>D
        </label>
        <!-- <KeepAlive> 是一个内置组件，它的功能是在多个组件间动态切换时缓存被移除的组件实例 -->
        <!-- max prop 来限制可被缓存的最大组件实例数 -->
        <KeepAlive :max="10">
            <component :is="current"></component>
        </KeepAlive>
    </div>
</template>
<script setup>

import { shallowRef } from 'vue';
import CompC from './CompC.vue'
import CompD from './CompD.vue'

const current = shallowRef(CompC)

</script>