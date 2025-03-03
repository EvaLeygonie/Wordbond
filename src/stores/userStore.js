import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'LinguaLover',
    email: 'lingualover@example.com',
    bio: 'Hi! I love learning languages.'
  })

  function updateProfile(updatedUser) {
    user.value = { ...user.value, ...updatedUser }
  }

  return { user, updateProfile }
})
