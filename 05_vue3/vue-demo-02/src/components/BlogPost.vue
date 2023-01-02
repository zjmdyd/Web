<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
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
