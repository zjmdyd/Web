<template>
    <input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
    <input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
</template>


<script setup>
// import { emit } from 'process';
import { defineProps} from 'vue'
const props = defineProps(['firstName', 'lastName'])
console.log(props)
// 在父组件中添加根节点就不会包警告:Extraneous non-emits event listeners
// defineEmits(['firstName', 'lastName'])   // 加了也会报警告,父组件添加跟节点就不会了

</script>