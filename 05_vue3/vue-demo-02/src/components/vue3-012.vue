<template>
    <div class="demo">
        <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTabTitle === tab }]"
            @click="compChange(tab)">
            {{ tab }}
        </button>
        <!-- <Home></Home> -->
        <component :is="currentTab" class="tab"></component>
    </div>
</template>

<!-- 使用setup语法糖，这时候的is如果使用字符串会加载不出来，得使用组件实例 -->
<script setup>
import HomePage from './HomePage.vue'
import PostsPage from './PostsPage.vue'
import ArchivePage from './ArchivePage.vue'
import { ref, shallowRef } from 'vue'

const currentTab = shallowRef(HomePage)
const currentTabTitle = ref('HomePage')
const tabs = ['HomePage', 'PostsPage', 'ArchivePage']
function compChange(tab) {
    if(tab == 'HomePage') {
        currentTab.value = HomePage
    }else if(tab == 'PostsPage') {
        currentTab.value = PostsPage
    }else {
        currentTab.value = ArchivePage
    }
    currentTabTitle.value = tab
}

</script>

<style>
.demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
}

.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>