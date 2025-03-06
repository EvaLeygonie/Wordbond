import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => ({
    loggedIn: false
  }),
  actions: {
    login() {
      this.loggedIn = true
    },
    logout() {
      this.loggedIn = false
    }
  }
})
