// import axios from "axios";
import { ref } from 'vue'
import { defineStore } from 'pinia'
import currency from 'currency.js'

export const useUserStore = defineStore('user', () => {
  const balance = ref(currency(0))
  const status = ref('')

  function getBalance() {
    return new Promise((resolve, reject) => {
      status.value = 'loading'
      //  let mockPromise = axios.get(`user`)
      let mockPromise = new Promise((resolve) => {
        setTimeout(() => { return resolve(564.43) }, 100);
      })
      mockPromise.then((response: any) => {
        status.value = 'success'
        balance.value = currency(response)
        resolve
      }).catch(error => {
        status.value = 'error'
        reject(error)
      })
    })
  }
  return { getBalance, balance }
})

