<template>
    <div>
        <a href="#/">Home</a> | 
        <a href="#/about">AboutCom</a> | 
        <a href="#/non-existent-path">Broken Link</a>
        <component :is="currentView"></component>
    </div>
</template>

<script setup>

import Home from '../views/HomeComp.vue'
import AboutCom from '../views/AboutComp.vue'
import NotFound from '../views/NotFound.vue'
import { ref, onMounted, computed } from 'vue';

const routes = {
    '/' : Home,
    '/about' : AboutCom
}

const currentPath = ref(window.location.hash)
console.log(window.location.hash)

onMounted(() => {
    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })
})

const currentView = computed(() => {
    console.log(currentPath.value)
    console.log(currentPath.value.slice(1))
    return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>