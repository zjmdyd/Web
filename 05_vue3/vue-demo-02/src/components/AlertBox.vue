<template>
    <div class="alert-box">
        <strong>Error!</strong>
        <br />
        <!-- 我们使用 <slot> 作为一个占位符，父组件传递进来的内容就会渲染在这里 -->
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.alert-box {
    color: blue;
    border: 1px solid red;
    border-radius: 4px;
    padding: 20px;
    background-color: #f8f8f8;
}
strong {
    color: red;
}
</style>