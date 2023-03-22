<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>

<script setup>

import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
counter.count++

// with autocompletion ✨
// counter.$patch({ count: counter.count + 1 })
counter.$patch({
  count: counter.count + 1,
  age: 100,
  name: 'DIO',
})

// or using an action instead
// counter.increment()
setInterval(() => {
  // counter.increment()
  counter.count++
  // console.log(counter.doubleCount)
  // console.log(counter.doubleCountPlusOne)
  if(counter.count === 10) {
    counter.$reset()  // $reset() 方法将 state 重置为初始值
  }
}, 1000);
// console.log(counter.age)  // 100


counter.$subscribe((mutation, state)=> {
  // console.log(mutation)
  // console.log(state)
})

/*
插件
由于有了底层 API 的支持，Pinia store 现在完全支持扩展。以下是你可以扩展的内容：

为 store 添加新的属性
定义 store 时增加新的选项
为 store 增加新的方法
包装现有的方法
改变甚至取消 action
实现副作用，如本地存储
仅应用插件于特定 store

插件是通过 pinia.use() 添加到 pinia 实例的。
最简单的例子是通过返回一个对象将一个静态属性添加到所有 store
*/
console.log(counter.secret)

</script>

