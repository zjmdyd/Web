<template>
    <h1>姓名: {{obj.name}}</h1>
    <h1>年龄: {{obj.age}}</h1>
    <h1>深层次数据响应:{{obj.pro.a.b[0]}}</h1>
    <h1>产品: {{obj.taobao}}</h1>
    <hr>
    <button @click="btnEvent">点击更新视图层某一个数据</button>
</template>

<script>
// reactive不能用基本数据类型，ref可以
import { reactive } from 'vue';
export default ({
    setup() {
        const name = '马云';
        const age = 50;
        const taobao = '淘宝';
        const obj = reactive({taobao, 
            name, 
            age,
            pro: {
                a: {
                    b:['我是深层次的数据']
                }
            }
        });
        function btnEvent() {
            obj.name = '马化腾';
            obj.pro.a.b[0] = '深层次数据已经被改了';
            console.log(obj)
        }

        return {btnEvent, obj}
    },
})

</script>