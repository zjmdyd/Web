<template>
  <div>
    <ul>
      <li v-for="item in jsonData" :key="item.name">
        {{ item.name }} - {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "张三",
          age: 15,
        },
        {
          name: "李四",
          age: 17,
        },
      ]);
    }, 1500);
  });
}

const jsonData = ref(await fetchData())
</script>