import { ref } from 'vue'
import { defineStore } from 'pinia'

const CONVERSION_RATE = {
  'EUR': 0.815894,
  'CAD': 1.204355,
  'GBP': 0.70602,
  'MXN': 19.88162,
  'PLN': 3.66121
}

export const useConversionStore = defineStore('conversion', () => {
  const conversionRateType: { [key: string]: number } = {}
  const conversionRate = ref(conversionRateType)
  const status = ref('')

  function getConversionRate() {
    return new Promise((resolve, reject) => {
      status.value = 'loading'
      let mockPromise = new Promise(function (resolve) {
        setTimeout(resolve, 100);
      })
      mockPromise.then(() => {
        status.value = 'success'
        conversionRate.value = CONVERSION_RATE
        resolve(CONVERSION_RATE)
      }).catch(error => {
        status.value = 'error'
        reject(error)
      })
    })
  }
  return { getConversionRate, conversionRate }
})
