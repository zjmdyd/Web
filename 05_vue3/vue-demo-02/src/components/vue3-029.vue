<template>
    <div>
        <input v-model="query" />
        <br />
        被计算属性修改过的输入文本:<p>{{ inputVal }}</p>
        <TransitionGroup 
        tag="ul" 
        :css="false" 
        @before-enter="onBeforeEnter" 
        @enter="onEnter" 
        @leave="onLeave">
            <li 
            v-for="(item, index) in computedList" 
            :key="item.msg" 
            :data-index="index"
            >
                {{ item.msg }}
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup>
import gsap from 'gsap'
import { ref, computed } from 'vue';
// import { computed, reactive } from 'vue';
const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' }
]

const query = ref('')
const inputVal = computed(() => {
    return query.value + '+' + query.value
})

// 计算属性的回调方法调用时机:方法体里面的数据发生改变
// 需要用query.value,用query则不会触发回调方法
const computedList = computed(() => {
    console.log('执行筛选')
    return list.filter((item) => item.msg.toLocaleLowerCase().includes(query.value))
})
console.log(computedList)

function onBeforeEnter(el) {
    el.style.opacity = 0
    el.style.height = 0
}
function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}
function onLeave(el, done) {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}

</script>