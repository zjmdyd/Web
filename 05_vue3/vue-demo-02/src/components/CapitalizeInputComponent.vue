<template>
    <input type="text" :value="modelValue" @input="emitValue"/>
</template>

<script setup>

import {defineProps, defineEmits, toRef} from 'vue'
const props = defineProps({
    modelValue : String, 
    modelModifiers: {
        default: () => ({})
    }
})
// 组件的 v-model 上所添加的修饰符，可以通过 modelModifiers prop 在组件内访问到
// 父组件中定义了capitalize修饰符，v-model.capitalize="myText"

const parentModelModifiers = toRef(props, 'modelModifiers')
const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
    console.log(e)
    let v = e.target.value 
    console.log(parentModelModifiers.value.capitalize)  // true
    if(parentModelModifiers.value.capitalize) {
        v = v.charAt(0).toUpperCase() + v.slice(1)
    }
    emit('update:modelValue', v)
}
</script>