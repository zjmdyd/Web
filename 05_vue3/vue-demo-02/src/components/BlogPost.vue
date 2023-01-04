<template>
    <!-- 
    Props 是一种特别的 attributes，你可以在组件上声明注册。
    要传递给博客文章组件一个标题，我们必须在组件的 props 列表上声明它
    当一个值被传递给 prop 时，它将成为该组件实例上的一个属性 
    -->
    <div>
        <h1>{{ title }}</h1>
        <!-- <button @click="$emit('enlarge-text')">Enlarge text</button> -->
        <!-- 带参数的 -->
        <button @click="$emit('enlarge-text', 2)">Enlarge text</button>
    </div>

</template>

<script setup>
import { defineProps } from 'vue'
defineProps(["title"]);
</script>

<!-- <script>
export default({
    props: ["title"],
    emits: ['enlarge-text']
})
</script> -->
