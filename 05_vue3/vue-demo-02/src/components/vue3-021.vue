<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        Load post id:
        <button v-for="i in 5" @click="id = i">{{ i }}</button>
        <div v-if="error">
            <p>Oops! Error encountered: {{ error.message }}</p>
            <button @click="retry">Retry</button>
        </div>
        <!-- <div v-else-if="data">Data loaded: {{ data }}</div> -->
        <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
        <div v-else>Loading...</div>
    </div>
</template>

<script setup>
import { useFetch } from '@/plugins/Fetch';
import { ref, computed } from 'vue';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos/'
const id = ref('1')
// 如果函数只有一个语句，并且该语句返回一个值，则可以去掉括号和 return 关键字：
// const url = computed(() => {return baseUrl + id.value})
const url = computed(() => baseUrl + id.value)
const { data, error, retry } = useFetch(url)

</script>