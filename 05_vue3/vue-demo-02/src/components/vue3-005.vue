<template>
    <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
        <button>Add</button>
    </form>
    <ul>
        <li v-for="(todo, index) in todos" :key="todo.id" :title="todo.title">
            {{ todo.title }}
            <button @click="btnEvent(index)">remove</button>
        </li>
    </ul>
</template>

<script setup>
import { ref, reactive } from 'vue';

const newTodoText = ref('')
const todos = reactive([
    {
        id: 1,
        title: 'Do the dishes'
    },
    {
        id: 2,
        title: 'Take out the trash'
    },
    {
        id: 3,
        title: 'Mow the lawn'
    }
])
const nextTodoId = ref(4)

function addNewTodo() {
    todos.push({
        id: nextTodoId.value++,
        title: newTodoText.value
    })
    newTodoText.value = ''

    console.log(todos)
    console.log(todos.length)
}

function btnEvent(index) {
    console.log(index)
    todos.splice(index, 1)
 }
</script>