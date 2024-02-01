<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref({
	cnt: 0,
	name: "YUN"
})

// functions that mutate state and trigger updates
function increment() {
count.value.cnt++
count.value.name = count.value.name.split('').reverse().join('')
}

// lifecycle hooks
onMounted(() => {
	console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
	<button @click="increment">Count is: {{ count.cnt }} {{ count.name }}</button>
</template>

<style scoped>
button {
	font-weight: bold;
}
</style>
 
