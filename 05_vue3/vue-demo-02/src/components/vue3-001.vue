<template>
    <div>{{msg}}</div>
    <button @click="btnEvent">点击修改文本</button>
</template>

<!-- 未使用setup语法糖 -->
<!-- <script>
import { ref } from 'vue';

export default({
    setup(){
        const msg = ref('hello world')

        function btnEvent(){
            msg.value = 'hello baby'
        }
        return {msg, btnEvent}
    },
})
</script> -->

<!-- 使用了setup语法糖 -->
<script setup>
import { ref } from 'vue';

const msg = ref('hello world')

function btnEvent(){
    msg.value = 'hello baby'
}
</script>