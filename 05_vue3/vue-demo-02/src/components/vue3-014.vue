
<template>
    <div>
        <h1>{{ first }} {{ last }}</h1>
        <UserName v-model:first-name="first" v-model:last-name="last" />
    </div>

</template>

<script setup>
import { ref } from 'vue';
import UserName from './UserName.vue'

const first = ref('John')
const last = ref('Doe')
</script>