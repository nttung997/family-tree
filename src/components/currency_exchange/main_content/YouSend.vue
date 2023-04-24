<template>
  <div class="flex">
    <div class="flex  shadow rounded p-3">
      <div class="px-3 align-self-center">
        <img src="@/assets/icons/US.svg" alt="" />
      </div>
      <div>
        <div>{{ user.balance }}</div>
        <div>Available</div>
      </div>
    </div>
    <div class="px-3 shadow rounded ml-3 items-center flex">
      <input v-model="youSend" placeholder="You send" type="number" :max="user.balance.value" />
    </div>
  </div>
</template>
<script setup lang="ts">
import currency from 'currency.js'
import { onMounted, computed } from 'vue'
import { useCurrencyExchangeStore } from '@/stores/currencyExchange'
import { useUserStore } from '@/stores/user'
const currencyexchange = useCurrencyExchangeStore()
const user = useUserStore()

const youSend = computed({
  get() {
    return currencyexchange.youSend
  },
  set(newValue) {
    currencyexchange.youSend = currency(newValue)
  }
})
onMounted(() => {
  user.getBalance()
})

</script>
<style lang="scss" scoped></style>