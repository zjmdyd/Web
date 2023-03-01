<template>
  <div>
    <div>***兄弟组件通过mitt库传递值**</div>
    兄弟组件传过来的值: {{ msg }}
  </div>
</template>

<script setup>

import { ref, onUnmounted } from 'vue';
import Mitt from './mitt.js'

const msg = ref('')
const receiveMsg = (val) => {
  console.log('兄弟的值:')
  console.log(val)
  msg.value = val
}

// 监听任务
Mitt.on('sendMsg', receiveMsg)
// 也可以通过*监听所有任务
// Mitt.on('*', receiveMsg)
onUnmounted(() => {
  //组件销毁 移除监听
  Mitt.off('sendMsg', receiveMsg)
})

</script>