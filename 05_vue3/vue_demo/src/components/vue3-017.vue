<template>
  <div>{{ hello }}</div>
  <div>{{ eha }}</div>
</template>

<script setup>
import { getCurrentInstance } from 'vue';


const { proxy } = getCurrentInstance()

const hello = proxy.$translate('greetings.hello')
const eha = proxy.$translate('greetings.hengheng')
</script>