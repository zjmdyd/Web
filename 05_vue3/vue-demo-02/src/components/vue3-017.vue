<template>
  <div>测试插槽传值</div>
  <SoltMessage v-slot="slotProps">
    {{ slotProps.text }} {{ slotProps.count }}
  </SoltMessage>
  <!-- 也可以在 v-slot 中使用解构 -->
  <SoltMessage v-slot="{ text, count }">
    {{ text }} {{ count }}
  </SoltMessage>

  <!-- 具名作用于插槽 -->
  <SoltMessage>
    <template #footerProps="{ text, count }">
      {{ text }} {{ count }}
    </template>
  </SoltMessage>
</template>

<script setup>
import SoltMessage from './SoltMessage.vue'
</script>