<template>
  <div>****v-show和v-if****</div>
  <div>
    <div v-show="show">子div</div>
    {{ show ? '子div显示' : '子div隐藏' }}
  </div>

  <button @click="btnEvent">{{ show ? '隐藏' : '显示' }}</button>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true)
const btnEvent = () => {
  show.value = !show.value
}

/*
v-show指令设置隐藏是给绑定的DOM元素添加CSS样式：display:none，但是DOM元素仍然存在；
v-if指令设置隐藏是将DOM元素整个删除，此时DOM元素不再存在。

 v-if  切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；
 而 v-show 只是简单的基于CSS切换，不管初始条件是什么，元素总是会被渲染。

 v-show 由false变为true时不会触发组建的生命周期；
 v-if 是真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；
 v-if 也是惰性的，如果初始渲染时条件为假，则什么也不做——直到为真时才开始渲染条件块

  v-show 由更高的初始渲染消耗， v-if 有更高的切换消耗。

  如果需要非常频繁地切换，则使用v-show较好；

如果在运行时条件很少改变，则使用v-if较好。
*/

</script>