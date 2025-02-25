import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  actions: {
    increment(nr) {
      this.value += nr
    },
    incrementTemp() {
      this.valueTemp++
    }
  },
  state: () => ({ value: 0, valueTemp: 0 })
})
