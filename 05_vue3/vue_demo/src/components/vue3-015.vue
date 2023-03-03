<template>
  <div>{{ erroeCode[401] }}</div>
  <div>{{ AppKey }}</div>
</template>

<script setup>

import erroeCode from '@/config/erroeCode'
import { AppKey } from '@/config/erroeCode'

console.log(erroeCode)

</script>