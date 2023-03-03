<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- teleport组件是vue3中的一个内置组件，实现的就是将一个元素传送给指定的DOM节点下 -->
    <!-- 
					<Teleport> 接收一个 to prop 来指定传送的目标。
						to 的值可以是一个 CSS 选择器字符串，也可以是一个 DOM 元素对象。
						这段代码的作用就是告诉 Vue“把以下模板片段传送到 body 标签下”。-->
    <!-- to="#app"将放到<div id='app'>标签下 -->
    <Teleport to="body">
      <!-- 父组件可以通过 v-on (缩写为 @) 来监听子组件触发的事件 -->
      <ZJModal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
        <template #body>
          <h3>custom body</h3>
        </template>
      </ZJModal>
    </Teleport>
  </div>
</template>
<script setup>
import { ref, onActivated } from 'vue';
import ZJModal from './ZJModal.vue'

const showModal = ref(false)

</script>