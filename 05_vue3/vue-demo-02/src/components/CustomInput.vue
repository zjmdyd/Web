<template>
    <!-- 让组件工作起来，<CustomInput> 组件内部需要做两件事
    1.将内部原生 input 元素的 value attribute 绑定到 modelValue prop
    2.输入新的值时在 input 元素上触发 update:modelValue 事件 -->
    <input 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(["modelValue"])
console.log(props)
</script>