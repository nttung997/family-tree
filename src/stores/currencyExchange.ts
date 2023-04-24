import currency from 'currency.js'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrencyExchangeStore = defineStore('currencyExchange', () => {
  const youSend = ref(currency(0))
  return { youSend }
})