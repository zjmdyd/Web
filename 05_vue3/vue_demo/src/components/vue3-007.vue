<template>
    <h1>{{p1}}</h1>
    <br>
    <h1>{{p2}}</h1>
    <br>
    <h1>监听一个对象属性的变化:{{p3.age.num}}</h1>
    <br>
    <button @click="p1++">点击p1++</button>
    <button @click="p2+=2">点击p2+2</button>
    <button @click="p3.age.num++">点击p3马云的年龄++</button>
</template>

<script>

import { ref , watch, reactive} from 'vue'

export default({
    setup() {
        const p1 = ref(0)
        const p2 = ref(1)

        const p3 = reactive({
            name: '马云',
            age: {
                num: 1,
            }
        })
        // 一:监听1个ref数据变化
        // watch(p1, (newVal, oldVal)=> {
        //     console.log(newVal, oldVal)
        // })

        // 二:监听多个ref的值
        // watch([p1, p2], (newVal, oldVal)=> {
        //     console.log(newVal, oldVal)
        // })

        // 三；监听整个reactive响应式数据的变化
        // 只能监听到最新的结果，上一次的数据是监听不到的
        //  watch(p3, (newVal, oldVal)=> {
        //     console.log(newVal, oldVal)
        // })

        // 三；监听reactive响应式数据中某一个值的变化
        // 最新的结果和上一次结果都能得到
        // watch(()=>p3.age.num, (newVal, oldVal)=> {
        //     console.log(newVal, oldVal)
        // })
        // 同上，多了最后一个参数,进入页面立即监听的一个参数
        watch(()=>p3.age.num, (newVal, oldVal)=> {
            console.log(newVal, oldVal)
        }, {immediate: true})
        return {p1, p2, p3}
    },
})
</script>