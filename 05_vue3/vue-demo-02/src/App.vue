<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
  <!-- <HelloWorld :msg="parentMsg" /> -->
  <!-- <HelloWorld msg="Welcome to You vue.js App"/> -->
  <div>
    <HelloWorld @sendMsg="getFromChild"/>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorld from './components/vue3-001.vue'
// import HelloWorld from './components/vue3-002.vue'
// import HelloWorld from './components/vue3-003.vue'
// import HelloWorld from './components/vue3-004.vue'
// import HelloWorld from './components/vue3-005.vue'
// import HelloWorld from './components/vue3-006.vue'
// import HelloWorld from './components/vue3-007.vue'
// import HelloWorld from './components/vue3-008.vue'
// import HelloWorld from './components/vue3-009.vue'
// import HelloWorld from './components/vue3-010.vue'
import HelloWorld from './components/vue3-011.vue' // AlertBox
// import HelloWorld from './components/vue3-012.vue'
// import HelloWorld from './components/vue3-013.vue'
// import HelloWorld from './components/vue3-014.vue' 
// import HelloWorld from './components/vue3-015.vue' // CapitalizeInputComponent
// import HelloWorld from './components/vue3-Child.vue'

import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  setup(){
    const parentMsg = ref('父组件里面的信息')

    // 
    const getFromChild = (val) => {
      // console.log('来自子组件的数据')
      console.log('val = ' + val) //我是子组件数据
    }

    return {parentMsg, getFromChild}
  },
}
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
</style>
