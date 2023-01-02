<template>
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
