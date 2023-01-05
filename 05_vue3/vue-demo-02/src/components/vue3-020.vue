<template>
    <div>
        Mouse position is at: {{ x }}, {{ y }}
    </div>
</template>

<script setup>

import { useMouse } from '@/plugins/mouse';

const {x, y} = useMouse()

</script>