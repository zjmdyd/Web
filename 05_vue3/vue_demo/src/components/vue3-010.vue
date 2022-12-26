<template>
    <div class="back">
        这是子组件
        <h2>{{p1.name==null?'':p1.name}}</h2>
        <h2>{{p1.age==null?'':p1.age}}</h2>
    </div>
</template>

<script>

import { reactive } from 'vue'

export default({
    setup(){
        // const p1 = inject('name')   // 进入页面自动收
        // console.log(p1)

        // 被父组件调用的方法
        const p1 = reactive({})
        function receive(val) {
            console.log('被父组件调用的方法')
            console.log(val)
            p1.name = val.name
            p1.age = val.age
            console.log(p1)
        }
        return {receive, p1}
    },
})

</script>

<style scoped>
.back {
    background-color: blueviolet;
    color: white;
    padding: 20px 0;
}
</style>