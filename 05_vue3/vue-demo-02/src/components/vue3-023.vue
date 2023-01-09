<template>
    <div>
        <button @click="show = !show">Toggle Slide + Fade</button>
        <Transition name="slide-fade">
            <p v-if="show">hello</p>
        </Transition>

        <button @click="showBounce = !showBounce">showBounce</button>
        <Transition name="bounce">
          <p v-if="showBounce" style="margin-top: 20px; text-align: center;">
            Hello here is some bouncy text!
          </p>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true)
const showBounce = ref(true)

</script>

<style>

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
