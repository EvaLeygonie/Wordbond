import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(JSON.parse(localStorage.getItem('profileData')) || null)

  function useProfile(profileData) {
    profile.value = profileData
    localStorage.setItem('profileData', JSON.stringify(profileData))
  }

  function updateProfile(updatedProfile) {
    profile.value = { ...profile.value, ...updatedProfile }
    localStorage.setItem('profileData', JSON.stringify(profile.value))
  }

  function clearProfile() {
    profile.value = null
    localStorage.removeItem('profileData')
  }

  return { profile, useProfile, updateProfile, clearProfile }
})
