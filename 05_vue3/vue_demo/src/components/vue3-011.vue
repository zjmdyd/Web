<!-- 安装vuex -->
<!-- npm install vuex@next --save -->

<template>
  <div class="back">
    这是子组件
    <h2>姓名: {{ res }}</h2>
    <h2>年龄: {{ singleAge }}</h2>
    *****使用mapState生成多个计算属性
    <h2>年级: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <br>
    <button @click="btnEvent">点击改变vuex数据仓库里面的数据</button>
    <br />
    输入年龄:<input :value="udAge" @input="updateAge"/>
  </div>
</template>

<script>

import { computed } from 'vue'
import { useStore } from 'vuex'
import useState from '@/store/useState'

export default ({
  setup() {
    // 从vuex数据仓库里面取数据
    const store = useStore()
    //单个属性监听
    const res = computed(() => {
      // console.log('子组件computed钩子函数被调用, 修改了name')
      // console.log(store.state.name)
      return store.state.name
    })

    const singleAge = computed(() => {
      // console.log('子组件computed钩子函数被调用,修改了age')
      // console.log(store.state.age)
      return store.state.age
    })
    // const udAge = ref('')
    const udAge = computed(() => {
      console.log('子组件computed钩子函数被调用,修改了age')
      console.log(store.state.age)
      return store.state.age
    })
    
    // mapState监听多个计算属性，传入数组，
    const storeStateArr = useState(["name", "age"]);
    // console.log('storeStateArr')
    // console.log(storeStateArr)
    console.log('store.getters')
    console.log(store.getters)
    console.log(store.getters.doneTodos)
    console.log(store.getters.doneTodosCount)

    // 点击调用vuex并且改变vuex仓库里的数据
    function btnEvent() {
      // 异步调用:dispatch
      store.dispatch('sub', ['雷军', 50])
      // 同步调用
      // store.commit('trigger')  // 不带参的
      // store.commit('trigger', '雷军') // 带参的，各种数据类型都可以传
    }
    function updateAge(e) {
      console.log('e = ')
      console.log(e)
      store.dispatch('sub', ['雷军', e.target.value])
    }
    return { res, singleAge, udAge, btnEvent, updateAge, ...storeStateArr}
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