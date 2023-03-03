<template>
  <div></div>
</template>

<script setup>
/*
nextTick 的原理，用一句话总结就是『利用 Event loop 事件线程去异步操作』。
本质上就是注册异步任务来对任务进行处理

nextTick原理是借助浏览器事件循环来完成的,因为每次事件循环之间都有一次视图渲染,
nextTick尽量在视图渲染之前完成dom更新,所以nextTick优先使用的是promise(微任务)实现
每次执行nextTick时会将传入的回调函数放入一个队列中(callbacks数组),
然后当在本次事件循环的同步代码执行完毕后开启一个微任务(promise或者MutationObserver)去依次执行这个callbacks中的回调函数。
但是当浏览器不支持promise的时候在vue2中会进行进行降级处理,依次使用setImmediate、setTimeout开启一个宏任务执行callbacks
当一个data数据更新时对应的watcher便会调用一次nextTick,将它对应的dom更新操作作为回调函数放入callbacks中,
所以当我们想获取这个data更新后的dom需要在其值变化后也调用nextTick将回调函数传入排在上个更新dom的回调函数后面,
所以我们可以在这个nextTick的回调函数中获取到更新后的data

*/ 
</script>