<template>
    <h1>姓名: {{obj.name}}</h1>
    <h1>年龄: {{obj.age}}</h1>
    <h1>深层次数据响应:{{obj.pro.a.b[0]}}</h1>
    <h1>产品: {{obj.taobao}}</h1>
    <hr>
    <button @click="btnEvent">点击更新视图层某一个数据</button>
    <p>{{ arr }}</p>

    <div>Checked names: {{ checkedNames }}</div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>
</template>

<script>
// reactive不能用基本数据类型，ref可以
import { reactive, ref} from 'vue';
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

        const arr = reactive(['a', 'b', 'c'])

        const checkedNames = ref([])    // 此处不能用reactive,?
        function btnEvent() {
            obj.name = '马化腾';
            obj.pro.a.b[0] = '深层次数据已经被改了';
            arr.push('d')
            console.log(obj)
            console.log(checkedNames)
        }
        
        return {btnEvent, obj, arr, checkedNames}
    },
})

</script>