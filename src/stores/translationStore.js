import { defineStore } from 'pinia'

export const useTranslationStore = defineStore('translation', {
  actions: {
    async translate(text) {
      const sourceLang = 'es'
      const targetLang = 'sv'
      //Koppla till user & friend language

      try {
        const res = await fetch(
          `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}`
        )

        const data = await res.json()
        return data.responseData.translatedText
      } catch (error) {
        return 'Translation unavailable'
      }
    }
  }
})
