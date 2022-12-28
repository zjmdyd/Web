<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <p>Message is: {{ message }}</p>
        <input v-model="message" placeholder="edit me" />
        <br>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ multi_message }}</p>
        <textarea v-model="multi_message" placeholder="add multiple lines"></textarea>
        <br>

        <!-- label中的for属性规定了label与哪个表单元素绑定。 -->
        <!-- for属性的值和表单元素的id值一样，即可完成该label标签与该表单元素的绑定 -->
        <input type="checkbox" id="checkboxx" v-model="checked" />
        <label for="checkboxx">{{ checked }}</label>

        <!-- 多个复选框 -->
        <div>Checked names: {{ checkedNames }}</div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames" />
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
        <label for="mike">Mike</label>

        <!-- 单选按钮 -->
        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two">Two</label>

        <!-- 选择器 -->
        <div>Selected: {{ selected }}</div>
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <div>Selected: {{ multi_selected }}</div>
        <select v-model="multi_selected" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>

        <br>
        <div>Selected: {{ select_2 }}</div>
        <select v-model="select_2">
            <option v-for="option in options" :value="option.value">
            {{ option.text }}
            </option>
        </select>
        <br>

        <!-- 在 "change" 事件后同步更新而不是 "input" -->
        <p>懒加载文本输入:{{ lazyMsg }}</p>
        <input v-model.lazy="lazyMsg" />
        <!-- 如果你想让用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入 -->
        <!-- 如果该值无法被 parseFloat() 处理，那么将返回原始值。 -->
        <!-- number 修饰符会在输入框有 type="number" 时自动启用 -->
        <p>请输入年龄:{{ age }}</p>
        <input v-model.number="age"/>

        <!-- 如果你想要默认自动去除用户输入内容中两端的空格，你可以在 v-model 后添加 .trim 修饰符 -->
        <p>请输入姓名:{{ name }}</p>
        <input v-model.trim="name"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('')
const multi_message = ref('')
const checked = ref(true)

const checkedNames = ref([])

const picked = ref('')

const selected = ref('')
const multi_selected = ref([])

const select_2 = ref('')
const options = [
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
]

const lazyMsg = ref('')
const age = ref(0)
const name = ref('')
/*
v-model 还可以用于各种不同类型的输入，<textarea>、<select> 元素。
它会根据所使用的元素自动使用对应的 DOM 属性和事件组合：
文本类型的 <input> 和 <textarea> 元素会绑定 value property 并侦听 input 事件；
<input type="checkbox"> 和 <input type="radio"> 会绑定 checked property 并侦听 change 事件；
<select> 会绑定 value property 并侦听 change 事件
*/
/*
注意在 <textarea> 中是不支持插值表达式的。请使用 v-model 来替代：

<!-- 错误 -->
<textarea>{{ text }}</textarea>

<!-- 正确 -->
<textarea v-model="text"></textarea>
*/
</script>

<style>
select[multiple] {
    width: 100px;
}
</style>