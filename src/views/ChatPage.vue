<script setup>
  import { ref, nextTick } from 'vue'
  import { useRoute } from 'vue-router'
  import ChatBubble from '../components/ChatBubble.vue'
  import { useChatStore } from '../stores/chatStore'

  const route = useRoute()
  const chatStore = useChatStore()

  const friendName = route.query.name
  const language = route.query.language
  const chatBox = ref(null)

  const newMessage = ref('')

  const sendMessage = () => {
    // chatStore.clearChat()
    // chatStore.addMessage('Hola! Cómo estás?', false)
    // chatStore.addMessage('Hej! Jag mår bra, själv?', true)
    // chatStore.addMessage('Bra! kan lite svenska', false)
    if (newMessage.value.trim() !== '') {
      chatStore.addMessage(newMessage.value, true)
      newMessage.value = ''
      nextTick(scrollToBottom)
      setTimeout(() => {
        chatStore.addMessage(':)', false)
        nextTick(scrollToBottom)
      }, 1000)
    }
  }

  const scrollToBottom = () => {
    nextTick(() => {
      if (chatBox.value) {
        chatBox.value.scrollTop = chatBox.value.scrollHeight
      }
    })
  }
</script>

<template>
  <h3>Learn {{ language }} with {{ friendName }}</h3>
  <div class="chat-container">
    <div ref="chatBox" class="chat-box">
      <ChatBubble
        v-for="(msg, index) in chatStore.messages"
        :key="index"
        :message="msg.text"
        :is-user="msg.isUser"
      />
    </div>

    <div class="tools-section">
      <p>Verktyg - översättning - AI - ordbok - sparade meddelanden</p>
    </div>

    <div class="input-container">
      <input v-model="newMessage" type="text" @keyup.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
    margin: auto;
  }

  .chat-box {
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow-y: auto;
    max-height: calc(85vh - 60px);
  }

  .input-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fef3e2;
    display: flex;
    gap: 10px;
    padding: 10px;
    border-top: 2px solid #575555;
    input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
      border-radius: 5px;
    }
    :focus {
      outline: 2px solid rgba(250, 64, 50, 0.5);
    }
    button {
      padding: 10px 15px;
      font-size: 16px;
      color: #fef3e2;
      background-color: #fa4032;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }

  .tools-section {
    display: none;
  }

  @media (min-width: 500px) {
    .chat-container {
      width: 90%;
    }

    .tools-section {
      display: inline;
      background: #fef3e2;
      outline: 2px solid rgba(250, 64, 50, 0.5);
      padding: 15px;
      border-radius: 10px;
      max-height: 70vh;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }

  @media (min-width: 700px) {
    .chat-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }

    .chat-box {
      max-height: calc(85vh - 60px);
    }
  }
</style>
