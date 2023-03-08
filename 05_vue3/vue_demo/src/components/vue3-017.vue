<template>
  <div>{{ hello }}</div>
  <div>{{ eha }}</div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';

// 用来获取当前组件实例 
const { proxy } = getCurrentInstance()

const hello = proxy.$translate('greetings.hello')
const eha = proxy.$translate('greetings.hengheng')
</script>