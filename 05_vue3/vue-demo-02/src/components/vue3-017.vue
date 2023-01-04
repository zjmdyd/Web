<template>
    <SoltMessage v-slot="slotProps">
      {{ slotProps.text }} {{ slotProps.count }}
    </SoltMessage>
</template>

<script setup>
import SoltMessage from './SoltMessage.vue'
</script>