<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <!-- <HelloWorld :msg="parentMsg" /> -->
  <!-- <HelloWorld msg="Welcome to You vue.js App"/> -->
  <div>
    <div class="mg8">父组件的信息:<input class="mg8" v-model="parentMsg" /></div>
    <!-- <div class="mg8">父组件通过provide传给子组件的值: {{ msg2 }}</div> -->
    <div>
      父组件通过provide传给子组件的值:<input v-model="msg2"/>
    </div>
    <!-- <div class="mg8">父组件通过provide传给子组件的值: {{ msg2 }}</div> -->
    <div class="mg8">父组件接收子组件的信息: {{ subMsg }}</div>
    <div class="mg8">父组件通过ref节点绑定访问子组件信息: {{ receiveSubrefMsg }}</div>
    <hr />
    <HelloWorld :msg="parentMsg" :msg2="msg2" @sendMsg="getFromChild" @parentFun="parentFun" ref="childeRef" />
    <hr />
    <Child1 />
    <Child2 />
    <hr />
    <HelloWorld2 />
    <hr />
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
import HelloWorld from './components/vue3-Child.vue'     // defineProps传值
import Child1 from './components/vue3-Child1.vue'     // defineProps传值
import Child2 from './components/vue3-Child2.vue'     // defineProps传值
import HelloWorld2 from './components/vue3-018.vue'        // 


import { onMounted, computed, ref, provide } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2,
    Child1,
    Child2
  },

  setup() {
    const parentMsg = ref('父组件传给子组件的信息')
    const msg2 = ref('父传子msg2')
    // provide("msg2", msg2) // 可以直接传
    // 用计算属性实时更新
    provide("msg2", computed(() => {
      return msg2
    }))
    const subMsg = ref('')
    // 
    const getFromChild = (val) => {
      // console.log('来自子组件的数据')
      console.log('val = ' + val) //我是子组件数据
      subMsg.value = val
    }

    const parentFun = (val) => {
      console.log(`父组件方法被调用,获得子组件传值：${val}`)
    }

    const childeRef = ref()
    const receiveSubrefMsg = ref('')
    onMounted(() => {
      //获取子组件属性
      receiveSubrefMsg.value = childeRef.value.refMsg
      //调用子组件方法
      childeRef.value.loadList()
    })

    return { receiveSubrefMsg, childeRef, subMsg, parentMsg, msg2, parentFun, getFromChild }
  },
}
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/vue3-001.vue'
// import HelloWorld from './components/vue3-002.vue'
// import HelloWorld from './components/vue3-003.vue'
// import HelloWorld from './components/vue3-004.vue'
// import HelloWorld from './components/vue3-005.vue'
// import HelloWorld from './components/vue3-006.vue'
// import HelloWorld from './components/vue3-007.vue'
// import HelloWorld from './components/vue3-008.vue' // getCurrentInstance();
// import HelloWorld from './components/vue3-009.vue'
// import HelloWorld from './components/vue3-010.vue'
// import HelloWorld from './components/vue3-011.vue' // AlertBox
// import HelloWorld from './components/vue3-012.vue'
// import HelloWorld from './components/vue3-013.vue'    // CustomInput
// import HelloWorld from './components/vue3-014.vue' 
// import HelloWorld from './components/vue3-015.vue' // CapitalizeInputComponent
// import HelloWorld from './components/vue3-016.vue'    // 具名插槽
// import HelloWorld from './components/vue3-017.vue'   // 插槽传值
// import HelloWorld from './components/vue3-018.vue'      // 插槽传值2
// import HelloWorld from './components/vue3-019.vue'      // provide/inject和计算属性
// import HelloWorld from './components/vue3-020.vue'      // 组合式函数-鼠标监听
// import HelloWorld from './components/vue3-021.vue'      // 异步状态示例
// import HelloWorld from './components/vue3-022.vue'      // Transition
// import HelloWorld from './components/vue3-023.vue'      // Transition2
// import HelloWorld from './components/vue3-024.vue'      // Transition3
// import HelloWorld from './components/vue3-024.vue'      // Transition4 深层级过渡
// import HelloWorld from './components/vue3-025.vue'       // Transition5 JavaScript钩子
// import HelloWorld from './components/vue3-026.vue'       // Transition5 JavaScript钩子 
// import HelloWorld from './components/vue3-027.vue'       // Transition5 组件间过渡
// import HelloWorld from './components/vue3-028.vue'       // TransitionGroup
// import HelloWorld from './components/vue3-029.vue'       // TransitionGroup 渐进延迟列表动画
// import HelloWorld from './components/vue3-030.vue'       // KeepAlive内置组件
// import HelloWorld from './components/vue3-031.vue'        // Teleport
// import HelloWorld from './components/vue3-032.vue'        // routes
// import HelloWorld from './components/vue3-033.vue'        // v-show
// import HelloWorld2 from './components/vue3-034.vue'        // Suspense
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.mg8 {
  margin: 8px;
}
</style>
