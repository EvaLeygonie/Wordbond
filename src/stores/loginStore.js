import { defineStore } from 'pinia'
import { useProfileStore } from './profileStore'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const loggedIn = ref(JSON.parse(localStorage.getItem('loggedIn')) || false)

  function login() {
    loggedIn.value = true
    localStorage.setItem('loggedIn', JSON.stringify(true))
    console.log(localStorage.getItem('loggedIn'))
  }

  function logout() {
    loggedIn.value = false
    localStorage.setItem('loggedIn', JSON.stringify(false))
    const profileStore = useProfileStore()
    profileStore.clear()
  }

  return {
    loggedIn,
    login,
    logout
  }
})
