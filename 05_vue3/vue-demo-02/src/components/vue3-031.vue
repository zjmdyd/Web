<template>
    <div>
        <button id="show-modal" @click="showModal = true">Show Modal</button>

        <Teleport to="body">
            <!-- 父组件可以通过 v-on (缩写为 @) 来监听事件 -->
            <ZJModal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>custom header</h3>
                </template>
            </ZJModal>
        </Teleport>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ZJModal from './ZJModal.vue'

const showModal = ref(false)
</script>