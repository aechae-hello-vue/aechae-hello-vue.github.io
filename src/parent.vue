<script setup>
import { ref } from 'vue'
import Child from './components/Child.vue'

const pocketMoney = ref('부모 컨포넌트로부터 < 💌 >를 전달받았어요!')
</script>

<template>
	<Child :pocketMoney="pocketMoney"/>
</template>
