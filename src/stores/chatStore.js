import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: JSON.parse(localStorage.getItem('chatMessages')) || []
  }),
  actions: {
    addMessage(text, isUser) {
      this.messages.push({ text, isUser })
      localStorage.setItem('chatMessages', JSON.stringify(this.messages))
    },
    clearChat() {
      this.messages = []
      localStorage.removeItem('chatMessages')
    }
  }
})
