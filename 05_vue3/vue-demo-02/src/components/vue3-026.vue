<template>
    <div>
        <span style="margin-right: 20px;">Click to cycle through states:</span>
        <div class="btn-container">
            <Transition name="slide-up" mode="out-in">
                <button v-if="docState === 'saved'" @click="docState = 'edited'">Edit</button>
                <button v-else-if="docState === 'edited'" @click="docState = 'editing'">Save</button>
                <button v-else-if="docState === 'editing'" @click="docState = 'saved'">Cancel</button>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const docState = ref('saved')
</script>

<style>
.btn-container {
    display: inline-block;
    position: relative;
    height: 1em;
}

/* 进入和离开的元素都是在同时开始动画的，
因此我们不得不将它们设为 position: absolute 以避免二者同时存在时出现的布局问题.
我们可能想要先执行离开动画，然后在其完成之后再执行元素的进入动画.
，好在我们可以通过向 <Transition> 传入一个 mode prop 来实现这个行为.
    这样就不需要设置position: absolute; */
button {
  /* position: absolute; */
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>