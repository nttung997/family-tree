<template>
  <div class="flex">
    <div class="flex shadow rounded p-3">
      <div class="px-3 align-self-center">
        <img :src="getImgUrl()" alt="" />
      </div>
      <select v-model="selected">
        <option v-for="option in options" :value="option.value">{{ option.text }}</option>
      </select>
    </div>

    <div class="px-3 shadow rounded ml-3 items-center flex">
      <input :value="currencyExchange.theyGet"  placeholder="Recipient Gets">
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useCurrencyExchangeStore } from '@/stores/currencyExchange'
import { useConversionStore } from '@/stores/conversion'
const currencyExchange = useCurrencyExchangeStore()
const conversion = useConversionStore()

const options = computed(() => {
  let result: {
    html: string,
    value: string,
    text: string,
  }[] = [];
  Object.keys(conversion.conversionRate).forEach(function (key) {
    let src = `/src/assets/icons/${key}.svg`
    result.push({
      html: `<img src="${src}"/> ` + key,
      value: key,
      text: key,
    });
  });
  return result;
})
const selected = computed({
  get() {
    return currencyExchange.selected
  },
  set(value: string) {
    currencyExchange.selected = value
  },
})
function getImgUrl() {
  return `/src/assets/icons/${selected.value}.svg`;
}
</script>
