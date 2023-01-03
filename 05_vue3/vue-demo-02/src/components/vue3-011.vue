<template>
    <AlertBox>
        Something bad happened.
    </AlertBox>
    <FancyButton>
        Click me <!-- slot content  -->
    </FancyButton>
    <FancyButton>
        <span style="color:cyan">Click me! </span>
        <AwesomeIcon></AwesomeIcon>
    </FancyButton>
    <br />
    <!-- 插槽使用默认内容 -->
    <SubmitButton />
    <!-- provide custom text -->
    <SubmitButton>Save</SubmitButton>
</template>

<script setup>
import AlertBox from './AlertBox.vue'
import FancyButton from './FancyButton.vue'
import AwesomeIcon from './AwesomeIcon.vue'
import SubmitButton from './SubmitButton.vue'
</script>