<template>
    <!-- toRefs取值 -->
    <!-- <h1>姓名: {{res.name.value}}</h1>
    <h1>年龄: {{res.age.value}}</h1> -->

    <!-- <h1>姓名: {{rObj.name}}</h1>
    <h1>年龄: {{rObj.age}}</h1>
    <h1>a: {{rObj.a}}</h1>
    <h1>b: {{rObj.b}}</h1>
    <h1>c: {{rObj.c}}</h1> -->

    <!-- 扩展运算符和toRefs -->
    <h1>姓名: {{ name }}</h1>
    <h1>年龄: {{ age }}</h1>
    <h1>a: {{ a }}</h1>
    <h1>b: {{ rb }}</h1>
    <h1>c: {{ c }}</h1>
    <h1>d: {{ d.e }}</h1>
    <hr>
    <button @click="btnEvent">点击更新视图层某一个数据</button>
</template>

<script>
// reactive不能用基本数据类型，ref可以
import { reactive, toRefs } from 'vue';
export default ({
    setup() {
        const obj = { name: '马云', age: 50, a: 1, b: 2, c: 3, d: { e: '90' } };    // 源数据
        const rObj = reactive(obj)
        // const res = toRefs(rObj)

        function btnEvent() {
            // console.log(res)
        }
        // 扩展运算符和toRefs
        return { btnEvent, ...toRefs(rObj) }
    },
})

</script>