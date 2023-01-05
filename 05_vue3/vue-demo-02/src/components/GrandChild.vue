<template>
    <p>
        Message to grand child: {{ superInfo }}
    </p>
</template>

<script setup>
import { inject } from 'vue';

const superInfo = inject('message')
</script>