<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    isUser: Boolean
  })

  const bubbleClass = computed(() =>
    props.isUser ? 'chat-bubble user-message' : 'chat-bubble other-message'
  )
</script>

<template>
  <div :class="bubbleClass">
    <RouterLink
      :to="{
        path: '/otherprofile',
        query: { name: 'TalkativeTim' }
        //Link to userStore friend
      }"
    >
      <img v-if="!isUser" alt="Profilbild" src="/public\bilder\avatar_8.png" />
      <!-- v-bind source to stored friend + add prop -->
    </RouterLink>
    {{ message }}
    <img v-if="isUser" alt="Profilbild" src="/public\bilder\avatar_3.png" />
    <!-- v-bind source to stored user + add prop -->
  </div>
</template>

<style scoped>
  .chat-bubble {
    max-width: 70%;
    margin: 5px 0;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    word-wrap: break-word;
    align-items: center;
    img {
      max-height: 20px;
    }
  }

  .user-message {
    color: #000;
    background: rgba(250, 129, 47, 0.9);
    align-self: flex-end;
  }

  .other-message {
    color: #000;
    background: rgba(250, 177, 47, 0.9);
    align-self: flex-start;
  }
</style>
