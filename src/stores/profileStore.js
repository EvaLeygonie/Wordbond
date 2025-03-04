import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultProfile = ref({
  name: 'LinguaLover',
  email: 'lingualover@example.com',
  bio: 'Hi! I love learning languages.',
  LearningLanguage: 'Spanish',
  TeachingLanguage: 'English'
})

export const useProfileStore = defineStore('profile', () => {
  const savedProfile = JSON.parse(localStorage.getItem('profileData'))
  const profile = ref(savedProfile || defaultProfile)

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
    localStorage.removeItem('profileData', JSON.stringify(defaultProfile))
  }

  return { profile, useProfile, updateProfile, clearProfile }
})
