<template>
    <!-- 为具名插槽传入内容，我们需要使用一个含 v-slot 指令的 <template> 元素，
        并将目标插槽的名字传给该指令,v-slot 有对应的简写 # -->
    <BaseLayout>
        <!-- <template v-slot:header> -->
        <template #header>
            <h1>Here might be a page title</h1>
        </template>
        
        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <!-- 当一个组件同时接收默认插槽和具名插槽时，
            所有位于顶级的非 <template> 节点都被隐式地视为默认插槽的内容。所以上面也可以写成： -->


        <!-- 隐式的默认插槽 -->
  <!-- <p>A paragraph for the main content.</p> -->
  <!-- <p>And another one.</p> -->

        <template #footer>
             <p>Here's some contact info</p>
         </template>
    </BaseLayout>
</template>

<script setup>
import BaseLayout from './BaseLayout.vue'
</script>