import { defineStore } from 'pinia'

const defaultProfile = {
  name: 'LinguaLover',
  email: 'lingualover@example.com',
  age: '30',
  bio: 'Hi! I love learning languages.',
  languageToLearn: 'Spanish',
  languageToTeach: 'English',
  avatar: '',
  interests: ['Travel', 'Music', 'Reading']
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: JSON.parse(localStorage.getItem('profileData')) || {
      ...defaultProfile
    }
  }),
  actions: {
    use(profileData) {
      this.profile = profileData
      localStorage.setItem('profileData', JSON.stringify(profileData))
    },
    update(data) {
      Object.assign(this.profile, data)
      localStorage.setItem('profileData', JSON.stringify(this.profile))
    },
    clear() {
      this.profile = { ...defaultProfile }
      localStorage.removeItem('profileData')
    }
  }
})
