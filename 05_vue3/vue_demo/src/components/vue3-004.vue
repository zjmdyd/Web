<template>
    <h1>姓名: {{obj.name}}</h1>
    <h1>年龄: {{obj.age}}</h1>
    <h1>ref的数据:{{ref_in}}</h1>
    <hr>
    <button @click="btnEvent">点击更新视图层某一个数据</button>
</template>

<script>
// reactive不能用基本数据类型，ref可以
import {ref, toRef} from 'vue';
export default ({
    setup() {
        const obj = {name: '马云', age: 50};    // 源数据
        const res = toRef(obj, 'name');

        const num = 0;              // 源数据
        const ref_in = ref(num);    // 实质是复制操作
        function btnEvent() {
            res.value = '马化腾';   // toRef需改响应数据会影响源数据但不会更新视图层
            console.log(res)    
            console.log(obj)        // {name: '马化腾', age: 50}，源数据已改

            ref_in.value++;
            console.log(num);   // num不会改变，ref改响应数据不会影响源数据，但会更新视图层
        }

        return {btnEvent, obj, ref_in}
    },
})

</script>