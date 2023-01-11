<template>
    <!-- 让组件工作起来，<CustomInput> 组件内部需要做两件事
    1.将内部原生 input 元素的 value attribute 绑定到 modelValue prop
    2.输入新的值时在 input 元素上触发 update:modelValue 事件 -->

    <!-- 默认情况下，v-model 在组件上都是使用 modelValue 作为 prop， -->
    <!-- 并以 update:modelValue 作为对应的事件。我们可以通过给 v-model 指定一个参数来更改这些名 -->
    <!-- 
        <input
        type="text"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
    />
        在父组件中用:<CustomInput v-model:title="bookTitle" /> 
    -->
    <input 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(["modelValue"])
console.log(props)

// defineEmits(['update:modelValue'])
</script>