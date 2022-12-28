<template>
    <div class="back">
        我是子组件:
        <h2>姓名:{{res_a.name}}</h2>
        <h2>年龄:{{res_a.age}}</h2>
        <h2>公司:{{res_a.company}}</h2>
        <br>
        <button @click="btnEvent">点击姓名改变数据</button>
    </div>
</template>

<script>

import {} from 'vue'
import plbLic from '../config/public'

// 抽离封装
export default({
    setup(){
        // const res_a = reactive({
        //     name: '马云',
        //     age: 50,
        //     company: '阿里巴巴'
        // })
        const res_a = plbLic()

        function btnEvent() {
            res_a.name = '马化腾'
        }
        return {res_a, btnEvent}
    },
})

</script>

<style scoped>
.back {
  background-color:blueviolet;
}

</style>