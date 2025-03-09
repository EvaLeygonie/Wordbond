import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: JSON.parse(localStorage.getItem('chatMessages')) || [],
    timMessages: [
      { text: 'Hola! Cómo estás?', isUser: false },
      { text: 'Hej! Jag mår bra, själv?', isUser: true },
      {
        text: '¡Estoy bien! ¿Entonces quieres aprender español?',
        isUser: false
      },
      {
        text: 'Ja! Har alltid velat åka till Spanien! Det ser så vackert ut. :)',
        isUser: true
      },
      { text: '¡Sí, es muy bonito y soleado aquí!☀️', isUser: false },
      {
        text: 'Här är det regn...😢 Varför vill du lära dig svenska?',
        isUser: true
      },
      {
        text: '¡Tengo una familia sueca con la que me gustaría poder hablar mejor!',
        isUser: false
      },
      { text: 'Jag kan lite svenska redan! 😊', isUser: false }
    ],
    translatedText: JSON.parse(localStorage.getItem('translatedText')) || []
  }),
  actions: {
    loadTimChat() {
      this.messages = JSON.parse(JSON.stringify(this.timMessages))
    },
    addMessage(text, isUser) {
      this.messages.push({ text, isUser })
      localStorage.setItem('chatMessages', JSON.stringify(this.messages))
    },
    clearChat() {
      this.messages = []
      localStorage.removeItem('chatMessages')
    },
    addTransText(originalText, translatedText) {
      this.translatedText.push({
        text: originalText,
        translation: translatedText
      })
      localStorage.setItem(
        'translatedText',
        JSON.stringify(this.translatedText)
      )
    },
    clearTransText() {
      this.translatedText = []
      localStorage.removeItem('translatedText')
    }
  }
})
