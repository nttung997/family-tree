<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '../stores/todo'
const store = useTodoStore()

const todoId = ref(0)
type Todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
}
const todoData = ref({} as Todo)

async function fetchData() {
  todoData.value = {} as Todo
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
    <pre v-else>
      <div v-for="(v, k) in todoData" :key="k">{{ k }} : {{ v }}</div>
    </pre>
  </div>
</template>