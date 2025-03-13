import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFriendStore = defineStore('friend', () => {
  const currentFriend = ref(localStorage.getItem('currentFriend') || null)
  const userData = ref([])
  const selectedUser = ref(null)

  function removeFriend() {
    localStorage.removeItem('currentFriend')
    currentFriend.value = null
  }

  function addFriend(name) {
    localStorage.setItem('currentFriend', name)
    currentFriend.value = name
  }

  function fetchFriend(username) {
    return fetch('/data/userData.JSON')
      .then((response) => response.json())
      .then((result) => {
        userData.value = result
        selectedUser.value = userData.value.find(
          (user) => user.username === username
        )
        return selectedUser.value
      })
  }

  return {
    currentFriend,
    removeFriend,
    addFriend,
    fetchFriend
  }
})
