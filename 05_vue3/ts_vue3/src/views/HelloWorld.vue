<template>
  <div></div>
</template>

<script setup lang="ts">
function sayHello(person: string) {
  return "Hello, " + person;
}

let user = "Tom";
console.log(sayHello(user));
</script>
