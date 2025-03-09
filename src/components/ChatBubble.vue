<script setup>
  import { ref, computed } from 'vue'
  import { useTranslationStore } from '../stores/translationStore'

  const props = defineProps({
    message: {
      type: String,
      required: true
    },
    friendData: {
      type: Object,
      required: true
    },
    loggedProfile: {
      type: Object,
      required: true
    },
    isUser: Boolean
  })

  const bubbleClass = computed(() =>
    props.isUser ? 'chat-bubble user-message' : 'chat-bubble other-message'
  )

  const translationStore = useTranslationStore()
  const translatedMessage = ref(null)
  const isTranslated = ref(false)

  const translateMessage = async () => {
    const langCode = translationStore.convertLang(
      props.friendData.teaching_language
    )
    isTranslated.value = true
    translatedMessage.value = await translationStore.translateToSwe(
      props.message,
      langCode
    )
  }
</script>

<template>
  <div :class="bubbleClass">
    <RouterLink
      v-if="!isUser && friendData"
      :to="{
        path: '/otherprofile',
        query: { name: friendData.username }
      }"
    >
      <img alt="Profilbild" :src="friendData.profile_picture" />
    </RouterLink>

    {{ message }}

    <div id="translate-message" v-if="!isUser">
      🌍
      <button v-if="!isTranslated" @click="translateMessage(message)">
        Translate
      </button>
      <span v-if="isTranslated">{{ translatedMessage }}</span>
    </div>
    <img
      v-if="isUser && loggedProfile.name === 'LinguaLover'"
      alt="Profilbild"
      src="../bilder/avatar_3.png"
    />
    <img
      v-else-if="isUser && loggedProfile.avatar && loggedProfile.avatar !== ''"
      alt="Profilbild"
      :src="'/src//bilder/' + loggedProfile.avatar"
    />
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

  #translate-message {
    padding-top: 5px;
    margin-left: 2px;
  }

  button {
    border-radius: 50px;
    border: none;
    background: #fab12f;
    color: rgba(87, 85, 85, 0.7);
  }

  button:hover {
    color: #fef3e2;
  }
</style>
