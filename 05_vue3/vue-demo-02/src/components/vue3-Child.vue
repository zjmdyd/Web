<template>
  <div>
    <span>****子组件*****</span><br />
    <div class="mg8">父组件传过来的值: {{ parentMsg }}</div>
    <div class="mg8">子组件通过inject()接收父组件传过来的值: {{ parentMsg2 }}</div>
    
    <div class="mg8">
      子组件传给父组件的值:<input class="mg8" v-model="subValue" @input="inputChange">
    </div>
    <div class="mg8">
      子组件通过ref功能传给父组件的值: {{ refMsg }}
    </div>
    <button @click="getParentFun">调用父组件方法</button>
  </div>
</template>

<!-- 使用setup法糖 -->
<script setup>
import { watch, ref, toRef, inject, useAttrs, defineEmits, defineProps, defineExpose } from 'vue';

const emits = defineEmits(['sendMsg'])
const props = defineProps(["msg"]);
console.log(props) //父组件信息
let parentMsg = toRef(props, 'msg')
const subValue = ref('')

const parentMsg2 = inject('msg2')
console.log('子通过inject接收父的值:' + parentMsg2.value)

watch(parentMsg, (newValue, oldValue) => {
  console.log(`parentMsg从${oldValue}变成了${newValue}`)
})

const inputChange = (val) => {
  console.log('val = ')
  console.log(val)
  emits('sendMsg', subValue.value)
}

// 子组件使用$attrs可以获得父组件除了props传递的属性和特性绑定属性 (class和 style)之外的所有属性
// 即props中已经定义的属性不会在$attrs里面出现
const attrs = useAttrs()
console.log('attrs = ')
console.log(attrs)

const getParentFun = () => {
  //调用父组件方法
  // Vue3中使用attrs调用父组件方法时，方法前需要加上on；如parentFun->onParentFun
  attrs.onParentFun('我是子组件数据')
}

const refMsg = ref('子组件通过defineExpose暴露给父组件的值,父组件通过ref节点绑定访问子组件')
const  loadList = ()=>{
// 函数体
console.log('执行loadList')
}
//必须暴露出去父组件才会获取到
defineExpose({
    refMsg,
    loadList
})
</script>

<!-- 未使用setup法糖 -->
<!-- <script>
import { toRef } from 'vue';

export default({
    props: ["msg"],// 如果这行不写，下面就接收不到,父组件绑定的字段值'msg’
    setup(props, ctx){
        console.log(props)
        //获取父组件方法和事件
        console.log(ctx.attrs)
        const parentMsg = toRef(props, 'msg')
        return {parentMsg}
    },
})

</script> -->
<style scoped>
.mg8 {
  margin: 8px;
}
</style>