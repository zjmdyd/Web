<template>
    <div>
        {{parentMsg }}
    </div>
</template>

<!-- 使用setup法糖 -->
<script setup>
import { toRef, defineProps} from 'vue';

const props = defineProps(["msg"]);
console.log(props) //父组件信息
let parentMsg = toRef(props, 'msg')

</script>

<!-- 未使用setup法糖 -->
<!-- <script>
import { toRef } from 'vue';

export default({
    props: ["msg"],// 如果这行不写，下面就接收不到,父组件绑定的字段值'msg’
    setup(props){
        console.log(props)
        const parentMsg = toRef(props, 'msg')
        return {parentMsg}
    },
})

</script> -->