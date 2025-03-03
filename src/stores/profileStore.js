import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: JSON.parse(localStorage.getItem('profileData')) || null
  }),
  actions: {
    useProfile(profileData) {
      this.profile = profileData
      localStorage.setItem('profileData', JSON.stringify(profileData))
    },
    clearProfile() {
      this.profile = null
      localStorage.removeItem('profileData')
    }
  }
})
