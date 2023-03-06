<template>
  <div id="superDiv">
    <div>*****自定义全局指令v-focus*****</div>
    <input v-focus/>
    <div>*****自定义局部指令*****</div>
    <div id="cus_directive" v-description="{ color: 'white', text: 'hello!' }"></div>
    <div>*****自定义全局指令v-pin*****</div>
    <img v-pin:warning.right.top='true' src="../assets/logo.png"/>
  </div>
</template>

<script setup>

// const vFocus = {
//   mounted: (el) => el.focus()
// }
const vDescription = {
  mounted: (el, binding, vnode, prevNode) => {
    console.log('自定义局部指令mounted函数')
    console.log(el)
    console.log(binding)
    console.log(vnode)
    console.log(prevNode)
  },
  beforeUpdate: (el, binding) => {
    console.log('自定义局部指令beforeUpdate函数')
    console.log(el)
    console.log(binding)
  },
  update: (el, binding) => {
    console.log('自定义局部指令update函数')
    console.log(el)
    console.log(binding)
  },
  inserted: (el, binding) => {
    console.log('自定义局部指令inserted函数')
    console.log(el)
    console.log(binding)
  },
}
/*
created:在绑定元素的 attribute 前或事件监听器应用前调用
beforeMount:在元素被插入到 DOM 前调用
mounted: 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用
beforeUpdate:绑定元素的父组件更新前调用
updated:在绑定元素的父组件及他自己的所有子节点都更新后调用
beforeUnmount:绑定元素的父组件卸载前调用
unmounted:绑定元素的父组件卸载后调用

自定义钩子都有以下四种参数：

el:指令绑定到的元素。这可以用于直接操作 DOM。
binding:一个对象，包含以下属性。
  value：传递给指令的值。例如在v-my-directive="1 + 1"中，值是2。
  oldValue：之前的值，仅在beforeUpdate和updated中可用。无论值是否更改，它都可用。
  arg：传递给指令的参数 (如果有的话)。例如在v-my-directive:foo中，参数是"foo"。
  modifiers：一个包含修饰符的对象 (如果有的话)。例如在v-my-directive.foo.bar中，修饰符对象是{ foo: true, bar: true }。
  instance：使用该指令的组件实例。
  dir：指令的定义对象。
vnode:代表绑定元素的底层 VNode。
prevNode:之前的渲染中代表指令所绑定元素的 VNode。仅在beforeUpdate和updated钩子中可用。
*/
// 选项式写法
// directives: {
//   focus: {
//     // 指令的定义
//     mounted(el) {
//       el.focus()
//     }
//   }
// }
</script>