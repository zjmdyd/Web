<template>
  <div>
    <!-- <slot> 元素是一个插槽出口 (slot outlet)，标示了父元素提供的插槽内容 (slot content) 将在哪里被渲染 -->
    <!-- 子组件传入插槽的 props 作为了 v-slot 指令的值，可以在插槽内的表达式中访问 -->
    <slot :text="greetingMessage" :count="1"></slot>

    <slot name="footerProps" :text="message2" :count="2"></slot>

  </div>
</template>

<script setup>

const greetingMessage = 'hello'
const message2 = '具名作用于插槽'


</script>