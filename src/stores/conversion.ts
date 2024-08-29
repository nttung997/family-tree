import { ref } from 'vue'
import { defineStore } from 'pinia'

const CONVERSION_RATE = {
  'EUR': 0.815894,
  'CAD': 1.204355,
  'GBP': 0.70602,
  'MXN': 19.88162,
  'PLN': 3.66121
} as const

type conversionRateType = typeof CONVERSION_RATE
export type conversionRateKey = keyof conversionRateType

export const useConversionStore = defineStore('conversion', () => {
  const conversionRate = ref({} as conversionRateType)
  const status = ref('' as 'loading' | 'success' | 'error')

  function getConversionRate() {
    return new Promise((resolve, reject) => {
      status.value = 'loading'
      const mockPromise = new Promise((resolve: (v: conversionRateType) => void) => {
        setTimeout(() => resolve(CONVERSION_RATE), 100);
      })
      mockPromise.then((res) => {
        status.value = 'success'
        conversionRate.value = res
        resolve(res)
      }).catch(error => {
        status.value = 'error'
        reject(error)
      })
    })
  }
  return { getConversionRate, conversionRate }
})
