<!-- 安装vuex -->
<!-- npm install vuex@next --save -->

<template>
    <div class="back">
        这是子组件
        <h2>姓名: {{res}}</h2>
        <br>
        <button @click="btnEvent">点击改变vuex数据仓库里面的数据</button>
    </div>
</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'

export default({
    setup() {
        // 从vuex数据仓库里面取数据
        const store = useStore()
        const res = computed(()=>{
            console.log(store.state.name)
            return store.state.name
        })

        // 点击调用vuex并且改变vuex仓库里的数据
        function btnEvent() {
            // 异步调用:dispatch
            // store.dispatch('sub')
            // 同步调用
            // store.commit('trigger')  // 不带参的
            store.commit('trigger', '雷军') // 带参的，各种数据类型都可以传
        }
        return {res, btnEvent}
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