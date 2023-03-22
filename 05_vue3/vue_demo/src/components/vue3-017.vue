<template>
  <div>{{ hello }}</div>
  <div>{{ eha }}</div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue';

/*
getCurrentInstance是一个function方法，getCurrentInstance()是一个对象，
proxy也是一个对象。proxy是getCurrentInstance()对象中的一个属性

ctx和proxy都是getCurrentInstance()对象中的属性，通过解构赋值的方式拿到,
2者有所区别。ctx是普通对象，proxy是Proxy对象
*/
// 用来获取当前组件实例 
const proxy0 = getCurrentInstance()
const { proxy } = getCurrentInstance()  // 对象解构赋值
const { ctx } = getCurrentInstance()    // 对象解构赋值
console.log('proxy =')
console.log(proxy)
console.log('ctx =')
console.log(ctx)
console.log(proxy0)
console.log(proxy0 === proxy.$) // true
console.log(proxy === proxy0.proxy) // true

const hello = proxy.$translate('greetings.hello')
const eha = proxy.$translate('greetings.hengheng')

// console.log(hello)
// console.log(eha)
// 除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 $，以便与用户定义的属性区分开来

</script>