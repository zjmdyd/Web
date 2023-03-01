<template>
  <div class="back"> -->
    <!-- 这是父组件 -->
    <h2>姓名:{{res}}</h2>
    <!-- vue3-010.vue用到 -->
    <button @click="btnEvent">点击传值给子组件</button>
  </div>

  <!-- 生命周期函数demo:vue3-012有用到 -->
  <!-- <h2 @click="v1 = !v1">点击显示隐藏子组件</h2> -->
  <!-- <HelloWorld v-if="v1"/> -->

  <!-- <div class="back">
    我是父组件:
    <h2>姓名:{{res_a.name}}</h2>
    <h2>年龄:{{res_a.age}}</h2>
    <h2>公司:{{res_a.company}}</h2>
  </div> -->
  <!-- 组组件传值vue3-010.vue会用到 -->
  <!-- <HelloWorld ref=""/> --> 
  <HelloWorld />
</template>

<script>
// import HelloWorld from './components/vue3-001.vue'
// import HelloWorld from './components/vue3-002.vue'
// import HelloWorld from './components/vue3-003.vue'
// import HelloWorld from './components/vue3-004.vue'
// import HelloWorld from './components/vue3-005.vue'
import HelloWorld from './components/vue3-006.vue' //computed
// import HelloWorld from './components/vue3-007.vue'
// import HelloWorld from './components/vue3-008.vue'
// import HelloWorld from './components/vue3-009.vue'
// import HelloWorld from './components/vue3-010.vue'
// import HelloWorld from './components/vue3-011.vue'
// import HelloWorld from './components/vue3-012.vue'    // vue生命周期
// import HelloWorld from './components/vue3-013.vue'
// import HelloWorld from './components/vue3-014.vue'

import { computed, ref, onErrorCaptured, reactive} from 'vue'
import { useStore } from 'vuex'
import plbLic from './config/public'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    //#region 
    const p1 = reactive({name: '马云', age: 50})
    // provide('name', p1)   // 进入页面自动传值

    const val = ref() // ref节点，把ref节点绑定到子组件
    function btnEvent() {
      val.value.receive(p1) // 给子组件传值
    }
//#endregion

//#region 
    // 从vuex数据仓库里面取数据
    const store = useStore()
    /*
    computed是计算属性,当一个属性受一个或者多个属性影响的时候可以使用
    */
    const res = computed(()=>{
        // console.log(store.state.name)
        return store.state.name
    })

    const v1 = ref(true)

    // 所以要放在父组件方法中, 一般不用, 因为出错控制台直接打印出来了
    onErrorCaptured(()=>{
        console.log('onErrorCaptured, 当捕获一个来自子孙组件的错误时被调用')
    })
//#endregion

    // const res_a = reactive({
    //   name: '马云',
    //   age: 50,
    //   company: '阿里巴巴'
    // })
    const res_a = plbLic()
    return {res, v1, res_a, btnEvent}
  },
}
</script>

<style>
.back {
  background-color: rgb(30, 90, 98);
  padding: 20px 0;
  border: #000 2px solid;
  margin-bottom: 10px;
}

</style>
