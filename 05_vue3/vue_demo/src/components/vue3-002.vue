<template>
    <h1>姓名: {{name}}</h1>
    <h1>年龄: {{age}}</h1>
    <h1>公司: {{company}}</h1>
    <h1>产品: {{obj.taobao}}</h1>
    <h1 v-for="(item, index) in arr" :key="index">{{item.xiami}}</h1>
    <hr>
    <button @click="btnEvent">点击更新视图层某一个数据</button>
</template>

<script>
// import { defineComponent } from 'vue';
// export default defineComponent({
//     setup() {

//     },
// })
// 也可这样
import { ref } from 'vue';
export default ({
    setup() {
        var name = ref('马云');
        const age = ref(50);
        const company = '阿里巴巴';
        const obj = ref({'taobao' : '淘宝', 'tmall' : '天猫'});
        const arr = ref([{'xiami' : '虾米音乐'}]);
        function btnEvent() {
            console.log(name);
            name.value = '马化腾';
            // name = '马化腾';
            age.value = 80;
            obj.value.taobao = 'tbao2';
            arr.value[0].xiami = '虾米音乐002'
        }

        return {name, age, company, obj, btnEvent, arr}
    },
})

</script>