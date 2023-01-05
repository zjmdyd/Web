<!-- eslint-disable vue/require-v-for-key -->
<template>
    <ul>
        <li v-if="!items.length">
            Loading...
        </li>
        <li v-for="item in items">
            <slot name="item" v-bind="item"/>
        </li>
    </ul>
</template>

<script setup>
import { ref, onMounted, defineProps} from 'vue';
defineProps(['api-url', 'per-page'])
const items = ref([])

onMounted(()=>{
    console.log('onMounted, 在挂载时被调用')
    setTimeout(() => {
        items.value = [
            {body: 'Scoped Slots Guide', username: 'Evan You', likes: 20},
            { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
        ]
    }, 1000);
})

</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);;
}

li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
}
</style>