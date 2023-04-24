import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  function fetchData(todoId: Number) {
    return fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    )
  }
  return { fetchData }
})
