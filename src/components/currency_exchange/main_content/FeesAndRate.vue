<template>
  <div>
    <div>{{ currencyExchange.fee }} {{ "USD" }} fees</div>
    <div>{{ currencyExchange.currentRate }} {{ currencyExchange.selected }} exchange rate</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCurrencyExchangeStore } from '@/stores/currencyExchange'
import { useConversionStore } from '@/stores/conversion'
const currencyExchange = useCurrencyExchangeStore()
const conversion = useConversionStore()

onMounted(() => {
  conversion.getConversionRate()
})
</script>
<style lang="scss" scoped></style>