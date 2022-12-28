<template>
    <h1>{{parentMsg}}</h1>
    <div>
        <button @click="show('a')">showA</button>
        <button @click="show('b')">showB</button>
    </div>
</template>

<script setup>
import { toRef, defineProps} from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const props = defineProps(["msg"]);
console.log(props) //父组件信息
const parentMsg = toRef(props, 'msg')

/*
useRouter()执行一定要放在setup方法内的顶部或者其他位置，
不能放在下面setup的函数里面执行，否则作用域改变useRouter执行是undefined
*/
function show(index) {
    console.log(index)
    console.log(router.getRoutes())
    router.push(index == 'a' ? '/a': '/b')
}
</script>