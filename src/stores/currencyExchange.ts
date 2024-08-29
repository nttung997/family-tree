import currency from 'currency.js'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useConversionStore, conversionRateKey } from '@/stores/conversion'
const conversion = useConversionStore()

export const useCurrencyExchangeStore = defineStore('currencyExchange', () => {
  const youSend = ref(currency(0))
  const selected = ref('EUR' as conversionRateKey)

  const fee = computed(() => {
    const amount = youSend.value
    if (amount.value < 10) return amount.multiply(0.5 / 100)
    if (amount.value < 100) return amount.multiply(0.8 / 100)
    return amount.multiply(0.5 / 100).add(1.5)
  })

  const currentRate = computed(() => {
    return conversion.conversionRate[selected.value]
  })

  const theyGet = computed(() => {
    const rate = currentRate.value
    const result = youSend.value.subtract(fee.value).multiply(rate)
    return result
  })

  return { youSend, selected, fee, theyGet, currentRate }
})