<template>
    <h1>Here is a child components</h1>
    <!-- 组件可以被重用任意多次 -->
    <!-- 你会注意到，每当点击这些按钮时，每一个组件都维护着自己的状态，
        是不同的 count。这是因为每当你使用一个组件，就创建了一个新的实例 -->
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
</template>

<script setup>

import ButtonCounter from './ButtonCounter.vue'

</script>