<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1,2,3])

function onoff() {
  show.value = !show.value
}

function add(){
  console.log(list.value.length)
  list.value.push(list.value.length+1)
}

function remove() {
  list.value.pop()
}

function reverse() {
  list.value = list.value.slice().reverse()
}
</script>

<template>
<button @click="onoff">List 렌더링 ON/OFF </button>
<button @click="add">List 추가 </button>
<button @click="remove">List 제거 </button>
<button @click="reverse">List 뒤집기 </button>

<ul v-if="show">
<li v-for="item of list">{{ list }} </li>
</ul>
<p v-else-if="list.length">List is not empty, but hidden.</p>
<p v-else>List is empty.</p>
</template>
