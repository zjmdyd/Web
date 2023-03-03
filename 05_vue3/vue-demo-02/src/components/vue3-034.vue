<template>
  <div>
    子组件内容：
    <Suspense>
      <!-- #default 异步组件加载完成后页面呈现的内容 -->
      <template #default>
        <async-com />
      </template>
      
      <!-- #fallback 异步组件加载完成前页面呈现的内容 -->
      <template #fallback>Loading ...</template>
    </Suspense>
  </div>
</template>

<script setup>

import { defineAsyncComponent } from "vue";
// defineAsyncComponent方法用来动态引入组件
const asyncCom = defineAsyncComponent(() => import("./asyncCom.vue"));

</script>