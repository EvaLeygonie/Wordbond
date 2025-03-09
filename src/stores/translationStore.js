import { defineStore } from 'pinia'

export const useTranslationStore = defineStore('translation', {
  state: () => ({
    sourceLang: '',
    targetLang: ''
  }),
  actions: {
    convertLang(language) {
      let langCode = ''
      switch (language) {
        case 'Arabic':
          langCode = 'ar'
          break
        case 'Dutch':
          langCode = 'nl'
          break
        case 'English':
          langCode = 'en'
          break
        case 'French':
          langCode = 'fr'
          break
        case 'German':
          langCode = 'de'
          break
        case 'Greek':
          langCode = 'el'
          break
        case 'Hindi':
          langCode = 'hi'
          break
        case 'Italian':
          langCode = 'it'
          break
        case 'Japanese':
          langCode = 'ja'
          break
        case 'Korean':
          langCode = 'ko'
          break
        case 'Mandarin':
          langCode = 'zh'
          break
        case 'Portuguese':
          langCode = 'pt'
          break
        case 'Russian':
          langCode = 'ru'
          break
        case 'Spanish':
          langCode = 'es'
          break
        case 'Swedish':
          langCode = 'sv'
          break
        case 'Turkish':
          langCode = 'tr'
          break
        default:
          langCode = 'en'
      }
      return langCode
    },
    async translateToSwe(text, code) {
      this.sourceLang = code
      try {
        const res = await fetch(
          `https://api.mymemory.translated.net/get?q=${text}&langpair=${this.sourceLang}|sv`
        )

        const data = await res.json()
        return data.responseData.translatedText
      } catch (error) {
        return 'Translation unavailable'
      }
    },
    async translate(text, code) {
      this.targetLang = code
      try {
        const res = await fetch(
          `https://api.mymemory.translated.net/get?q=${text}&langpair=sv|${this.targetLang}`
        )

        const data = await res.json()
        return data.responseData.translatedText
      } catch (error) {
        return 'Translation unavailable'
      }
    }
  }
})
