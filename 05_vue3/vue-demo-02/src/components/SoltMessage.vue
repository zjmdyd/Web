<template>
    <div>
        <slot :text="greetingMessage" :count="1"></slot>
    </div>
</template>

<script setup>

const greetingMessage = 'hello'

</script>