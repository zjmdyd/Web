<template>
    ******toRefs取值*****
    <h1>姓名: {{res.name}}</h1>
    <h1>年龄: {{res.age}}</h1>
    <h1>a: {{ res.a }}</h1>
    <h1>b: {{ res.b }}</h1>
    <h1>c: {{ res.c }}</h1>
    <!-- 注意ref时obj的取值方法 -->
    <h1>d: {{ res.d.value.e }}</h1>
    <br />
    ******扩展运算符和toRefs取值*****
    <h1>姓名: {{ name }}</h1>
    <h1>年龄: {{ age }}</h1>
    <h1>a: {{ a }}</h1>
    <h1>b: {{ b }}</h1>
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
        const res = toRefs(rObj)

        function btnEvent() {
            console.log(rObj)
            console.log(res)
        }
        // 扩展运算符和toRefs
        return { btnEvent, res, ...toRefs(rObj) }
    },
})

</script>