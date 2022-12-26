<template>
    <h1>姓名:{{name}}</h1>
    <br>
    <h1>年龄:{{age.num}}</h1>
    <br>
    <button @click="age.num++">点击shallowReactive处理第二层数据age.num++无效</button>
    <button @click="name+= '9'">点击shallowReactive处理第一层数据name有效</button>

    <h1>数字加加:{{p2}}</h1>
    <br>
    <button @click="p2++">点击shallowRef处理基本类型数据p2++数据数据有效</button>
</template>

<script>

import {shallowReactive, shallowRef, toRefs} from 'vue'

export default ({
    setup(){
        // shallowReactive只处理第一层数据
        const p1 = shallowReactive({
            name: '马云',   // 第一层
            age: {         // 第二层 
                num: 0
            }
        })

        // shallowRef 只处理基本类型数据
        /* shallowRef处理对象类型数据无效
        const p2 = shallowRef({
            num:0
        })
        */

        const p2 = shallowRef(0)

        // 扩展运算符...
        return {...toRefs(p1), p2}
    },
})
</script>