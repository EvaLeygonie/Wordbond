<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import ChatBubble from '../components/ChatBubble.vue'

  const route = useRoute()

  const friendName = route.query.name
  const language = route.query.language

  const messages = ref([
    { text: "Hola! Cómo estás?", isUser: false },
    { text: "Hej! Jag mår bra, själv?", isUser: true },
    { text: "Bra! kan lite svenska", isUser: false },
  ])

  const newMessage = ref("")

  const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
      messages.value.push({text: newMessage.value, isUser: true})
      newMessage.value=""
      setTimeout(() => {
        messages.value.push({text: ":)", isUser: false})
      }, 1000)
    }
  }
</script>

<template>
  <h3>Learn {{ language }} with {{ friendName }}</h3>
  <div class="chat-container">
    <div class="chat-box">
      <ChatBubble v-for="(msg, index) in messages" :key="index" :message="msg.text" :isUser="msg.isUser"/>
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
  }

  .input-container {
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
      outline:  2px solid rgba(250, 64, 50, 0.5);
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
</style>
