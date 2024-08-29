<template>
  <div class="flex">
    <div class="flex shadow rounded p-3">
      <div class="px-3 align-self-center">
        <img :src="getImgUrl()" alt="" />
      </div>
      <select v-model="currencyExchange.selected">
        <option v-for="option in options" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>

    <div class="px-3 shadow rounded ml-3 items-center flex">
      <input :value="currencyExchange.theyGet" placeholder="Recipient Gets">
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useCurrencyExchangeStore } from '@/stores/currencyExchange'
import { useConversionStore, conversionRateKey } from '@/stores/conversion'
const currencyExchange = useCurrencyExchangeStore()
const conversion = useConversionStore()


const options = computed(() => {
  let result: {
    html: string,
    value: conversionRateKey,
    text: conversionRateKey,
  }[] = [];

  const keys = Object.keys(conversion.conversionRate) as conversionRateKey[]
  keys.forEach((key) => {
    let src = `/src/assets/icons/${key}.svg`
    result.push({
      html: `<img src="${src}"/> ` + key,
      value: key,
      text: key,
    });
  });

  return result;
})
function getImgUrl() {
  return `/src/assets/icons/${currencyExchange.selected}.svg`;
}
</script>
