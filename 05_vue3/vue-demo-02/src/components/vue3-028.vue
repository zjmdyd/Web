<template>
    <div>
        <button @click="insert">insert at random index</button>
        <button @click="reset">reset</button>
        <button @click="shuffles">shuffles</button>

        <TransitionGroup tag="ul" name="fade" class="container">
            <div v-for="item in items" class="item" :key="item">
                {{ item }}
                <button @click="remove(item)">x</button>
            </div>
        </TransitionGroup>
    </div>
</template>
<script setup>

import { shuffle } from 'lodash-es'
import { ref } from 'vue';

const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
const id = ref(items.value.length + 1)

function insert() {
    // Math.round(x) 的返回值是 x 四舍五入为最接近的整数
    // Math.random()返回介于 0（包括） 与 1（不包括） 之间的随机数
    const i = Math.round(Math.random() * items.value.length)
    // array.splice(index, howmany, item1, ....., itemX)
    // howmany,可选如果设置为 0，则不会删除任何项目。
    items.value.splice(i, 0, id.value++)
}

function reset() {
    items.value = getInitialItems()
    id.value = items.value.length + 1
}

function shuffles() {
    items.value = shuffle(items.value)
}

function remove(item) {
    const i = items.value.indexOf(item)
    if(i > -1) {
        items.value.splice(i, 1)
    }
}

</script>

<style>
.container {
    position: relative;
    padding: 0;
}

.item {
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
    border: 1px solid #666;
    box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    /* cubic-bezier(x1,y1,x2,y2) 
P0：默认值 (0, 0)       起点
P1：动态取值 (x1, y1)
P2：动态取值 (x2, y2)
P3：默认值 (1, 1)       终点
    */
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */

.fade-leave-active {
    position: absolute;
}

</style>