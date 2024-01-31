<script setup>
import { ref } from 'vue'
import villager from "@/assets/Villagers.json"
const villagers = ref(villager)

const rabbit = ref(villagers.value.filter(item => item.species === 'Rabbit'))
</script>

<template>
<li v-for = "item in rabbit">
  {{ item.name }} - {{ item.species }}

<img
                :src="item.iconImage"
                width={200}
                height={200}
              />
</li>
</template>
