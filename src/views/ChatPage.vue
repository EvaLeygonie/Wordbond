<script setup>
  import { ref, nextTick, onMounted, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { useChatStore } from '../stores/chatStore'
  import { useProfileStore } from '../stores/profileStore'
  import { useFriendStore } from '../stores/friendStore'
  import ToolBox from '../components/ToolBox.vue'
  import ChatBubble from '../components/ChatBubble.vue'
  import NoMatchChat from '../components/NoMatchChat.vue'

  const router = useRouter()
  const chatStore = useChatStore()
  const friendStore = useFriendStore()
  const profileStore = useProfileStore()

  const chatBox = ref(null)
  const newMessage = ref('')
  const friendMatch = ref(true)
  const selectedUser = ref(null)
  const loggedProfile = profileStore.profile

  const sendMessage = () => {
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

  onMounted(async () => {
    const result = await friendStore.fetchFriend(friendStore.currentFriend)

    if (!result) {
      friendMatch.value = false
      return
    }

    selectedUser.value = result
    friendMatch.value = true

    if (friendStore.currentFriend === 'TalkativeTim') {
      chatStore.loadTimChat()
      nextTick(scrollToBottom)
    } else {
      chatStore.clearChat()
      chatStore.clearTransText()
      setTimeout(() => {
        chatStore.addMessage(selectedUser.value.greeting, false)
        nextTick(scrollToBottom)
      }, 1000)
    }
  })

  watch(
    () => friendStore.currentFriend,
    async (newFriend) => {
      if (newFriend) {
        selectedUser.value = await friendStore.fetchFriend(newFriend)
      }
    }
  )
</script>

<template>
  <NoMatchChat v-if="!friendMatch" />
  <div v-else>
    <RouterLink
      :to="{
        path: '/otherprofile',
        query: { name: friendStore.currentFriend }
      }"
    >
      <h3 v-if="selectedUser">
        Learn {{ selectedUser.teaching_language }} with
        {{ selectedUser.username }}
      </h3>
      <h3 v-else>Loading...</h3>
    </RouterLink>
    <div class="chat-grid">
      <div class="chat-container">
        <div ref="chatBox" class="chat-box">
          <ChatBubble
            v-for="(msg, index) in chatStore.messages"
            :key="index"
            :message="msg.text"
            :is-user="msg.isUser"
            :friend-data="selectedUser"
            :logged-profile="loggedProfile"
          />
          <div class="input-container">
            <input
              v-model="newMessage"
              type="text"
              @keyup.enter="sendMessage"
            />
            <button @click="sendMessage">Send</button>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <ToolBox :friend-data="selectedUser" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chat-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .chat-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85vh;
  }

  .chat-box {
    display: flex;
    flex-direction: column;
    padding: 0 10px 20px 10px;
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

  a {
    text-decoration: none;
    color: #575555;
  }

  a:hover {
    color: #fa4032;
  }

  .tools-section {
    display: none;
  }

  @media (min-width: 500px) {
    .chat-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
      align-items: start;
    }

    .chat-container {
      width: 100%;
    }

    .chat-box {
      max-height: calc(85vh - 60px);
    }

    .tools-section {
      display: block;
      margin-right: 15px;
    }
  }
</style>
