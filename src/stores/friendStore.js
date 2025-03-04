import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useFriendStore = defineStore('friend', () => {
  const currentFriend = ref(localStorage.getItem('currentFriend') || null)

  function removeFriend() {
    localStorage.removeItem('currentFriend')
    currentFriend.value = null
  }

  function addFriend(name) {
    localStorage.setItem('currentFriend', name)
    currentFriend.value = name
  }

  function syncFriend(event) {
    if (event.key === 'currentFriend') {
      currentFriend.value = event.newValue
    }
  }

  onMounted(() => {
    window.addEventListener('storage', syncFriend)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', syncFriend)
  })

  return {
    currentFriend,
    removeFriend,
    addFriend
  }
})
