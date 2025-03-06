import { defineStore } from 'pinia'
import { useProfileStore } from './profileStore'

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
      const profileStore = useProfileStore()
      profileStore.clear()
    }
  }
})
