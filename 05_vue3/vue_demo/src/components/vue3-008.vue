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

import { ref, reactive, watchEffect} from 'vue'

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
       
        // 键入页面就会自动监听
        const res = watchEffect(()=>{
            console.log('watchEffect')
            // const a = p1.value
            // console.log(a)

            const b = p3.age.num
            console.log(b)
        })
        res()   // 停止监听:进入页面还是会调用

        return {p1, p2, p3, res}
    },
})
</script>