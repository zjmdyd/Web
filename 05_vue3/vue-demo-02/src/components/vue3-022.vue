<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <Transition>
            <p v-if="show">hello</p>
        </Transition>
        <br />
        <button @click="testTransByName = !testTransByName">Toggle_bgColor</button>
        <!-- 给 <Transition> 组件传一个 name prop 来声明一个过渡效果名 -->
        <Transition name="transByName">
            <p v-if="testTransByName">test transByName</p>
        </Transition>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const show = ref(true)
const testTransByName = ref(true)
</script>

<style>

/* v-enter-from: 进入动画的起始状态。在元素插入之前添加，在元素插入完成后的下一帧移除 */

/*
v-enter-active：进入动画的生效状态。应用于整个进入动画阶段。
在元素被插入之前添加，在过渡或动画完成之后移除。
这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型
*/

/*
v-enter-to：进入动画的结束状态。
在元素插入完成后的下一帧被添加 (也就是 v-enter-from 被移除的同时)，
在过渡或动画完成之后移除
*/

/* v-leave-from：离开动画的起始状态。在离开过渡效果被触发时立即添加，在一帧后被移除 */

/*
v-leave-active：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，
在过渡或动画完成之后移除。这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型
*/

/* v-leave-to：离开动画的结束状态。
在一个离开动画被触发后的下一帧被添加 (也就是 v-leave-from 被移除的同时)，
在过渡或动画完成之后移除 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* 对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 v 作为前缀 */
.transByName-enter-active,
.transByName-leave-active {
  transition: opacity 0.5s ease;
  background-color: aqua;
}

.transByName-enter-from,
.transByName-leave-to {
  opacity: 0;
}

</style>
