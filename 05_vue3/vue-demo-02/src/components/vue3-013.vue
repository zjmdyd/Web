<template>
    <!-- 默认情况下，v-model 在组件上都是使用 modelValue 作为 prop，
    并以 update:modelValue 作为对应的事件。我们可以通过给 v-model 指定一个参数来更改这些名
    <MyComponent v-model:title="bookTitle" />
 
 
// MyComponent.vue中则对应变为update:title
<script>
export default {
  props: ['title'],
  emits: ['update:title']
}
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
-->
    <CustomInput v-model="message"></CustomInput>
</template>

<script setup>
import CustomInput from './CustomInput.vue'
const message = 'hello'
</script>