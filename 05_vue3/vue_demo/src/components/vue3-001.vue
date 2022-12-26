<template>
  <div>{{res}}</div>
  <div>{{m}}</div>
  <div v-for="(item, index) in arr" :key="index">
    <h1>{{item}}</h1>
  </div>
  <button @click="btnEvent">点击看看</button>
</template>

<script>
export default {
  // vue2写法
  data(){
    return {
      m:'890'
    }
  },
  // vue3写法
  setup() {
    console.log("自动执行setup函数");
    const res = '123';
    const arr = ['1', '2', '3']
    // function btnEvent() {
    //   console.log('+++++++++')
    // }
    const btnEvent = ()=> {
      console.log('--------')
    }
    return {res, arr, btnEvent}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
