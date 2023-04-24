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
      let mockPromise = new Promise(function (resolve) {
        setTimeout(resolve, 100);
      })
      mockPromise.then(() => {
        status.value = 'success'
        balance.value = currency(564.43)
        resolve(56443)
      }).catch(error => {
        status.value = 'error'
        reject(error)
      })
    })
  }
  return { getBalance, balance }
})

