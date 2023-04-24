<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../stores/todo'
const store = useTodoStore()

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
    todoData.value = null
    const res = await store.fetchData(todoId.value)

    todoData.value = await res.json()
}

fetchData()
watch(todoId, fetchData)

</script>

<template>
    <div>

        <p>Todo id: {{ todoId }}</p>
        <button @click="todoId++">Fetch next todo</button>
        <p v-if="!todoData">Loading...</p>
        <pre v-else>{{ todoData }}</pre>
    </div>
</template>