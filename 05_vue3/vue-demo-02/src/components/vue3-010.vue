<template>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost v-for="post in posts" 
        :key="post.id" 
        :title="post.title" 
        @enlarge-text='btnEvent'>
        <!-- 父组件可以通过 v-on 或 @ 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样 -->
        </BlogPost>
    </div>

</template>

<script setup>

import BlogPost from './BlogPost.vue'
import { ref } from 'vue';

const posts = [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
]

const postFontSize = ref(1)

function btnEvent() {
    console.log('事件执行了');
    postFontSize.value += 1
    
}
</script>