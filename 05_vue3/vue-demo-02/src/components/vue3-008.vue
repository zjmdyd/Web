<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <!-- <input ref="input" /> -->
    <!-- this.$refs.input.focus() -->
    <input v-model="inputValue" ref="inputRef" @input="inputChange" placeholder="请输入内容" />

    <ul>
      <li v-for="item in list" ref="itemsRef">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance} from 'vue'

const inputRef = ref()
console.log('inputRef = ')
console.log(inputRef)

// 数组模板引用
const itemsRef = ref([])

onMounted(() => {
  console.log('onMounted, 在挂载时被调用')
  inputRef.value.focus()  // 光标会聚焦
  console.log(itemsRef.value)
})
const inputValue = ref('')
const inputChange = v => {
  console.log(v)
  console.log(inputValue)
}

const list = [1, 2, 3]

const internalInstance = getCurrentInstance();
console.log('refs = ')
console.log(internalInstance.ctx.$refs)

const { proxy } = getCurrentInstance();
console.log('proxy = ')
console.log(proxy)

</script>