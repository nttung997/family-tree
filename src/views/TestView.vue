<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface Todo {
  id: number
  text: string
  done: boolean
}

let id = 0
const newTodo = ref('')
const hideCompleted = ref(false)
const todos: Ref<Todo[]> = ref([])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
const filteredTodos = computed(() => {
  // return filtered todos based on
  // `todos.value` & `hideCompleted.value`
  if (!hideCompleted.value) return todos.value
  return todos.value.filter(i => !i.done)
})
</script>

<template>
  <div>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button>Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">X</button>
      </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? 'Show all' : 'Hide completed' }}
    </button>
  </div>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>