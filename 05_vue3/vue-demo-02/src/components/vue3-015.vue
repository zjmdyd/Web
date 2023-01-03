<template>
    <div>
        This input capitalizes everything you enter:
        <CapitalizeInputComponent v-model.capitalize="myText" />
    </div>
    
</template>

<script setup>
import CapitalizeInputComponent from './CapitalizeInputComponent.vue'
import { ref, useAttrs} from 'vue'
const myText = ref('')

// vue3, 在 JavaScript 中访问透传 Attributes, $attrs
const attrs = useAttrs()
console.log(attrs)

</script>