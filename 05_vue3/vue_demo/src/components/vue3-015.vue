<template>
  <div>{{ erroeCode[401] }}</div>
  <div>{{ AppKey }}</div>
  <div>****自定义全局指令使用****</div>
  <input v-focus/>

</template>

<script setup>

import erroeCode from '@/config/erroeCode'
import { AppKey } from '@/config/erroeCode'

console.log(erroeCode)

</script>