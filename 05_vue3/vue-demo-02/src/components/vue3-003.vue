<!-- eslint-disable vue/require-v-for-key -->
<template>
    <button @click="sendFun">send</button>
    <button :disabled="isButtonDisabled">Button</button>
    <h1 v-show="false">Hello!</h1>

    <div v-for="(item, index) in arr" :key="index">
    <h1>{{item}}</h1>
    </div>

    <!-- 看第一行代码注释，需关闭key，默认for需要key -->
	<li v-for="item in items">
	{{ item.message }}
	</li>

    <!-- 遍历字典对象:无key -->
    <li v-for="value in myObject">
        {{ value }}
	</li>

    <!-- 遍历字典对象:han'youkey -->
    <li v-for="(value, key) in myObject">
        {{ key }} : {{ value }}
	</li>
</template>

<script>

export default({
    // 事件声明是可选的(看情况)
    emits: ['sendMsg'],
    setup(props, ctx) {
        const items = [{ message: 'Foo' }, { message: 'Bar' }]

        const myObject = {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }

        function sendFun(){
            console.log(props)
            console.log(ctx)
            ctx.emit('sendMsg', '我是子组件数据')
        }

        return {sendFun, items, myObject}
    },
})
</script>