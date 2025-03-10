<script setup>
  import { ref, nextTick } from 'vue'
  import { useTranslationStore } from '../stores/translationStore'
  import { useChatStore } from '../stores/chatStore'

  const props = defineProps({
    friendData: {
      type: Object,
      required: true
    }
  })

  const translationStore = useTranslationStore()
  const chatStore = useChatStore()
  const newText = ref('')
  const textContainer = ref(null)

  const translateText = async () => {
    if (newText.value.trim() !== '') {
      const langCode = translationStore.convertLang(
        props.friendData.teaching_language
      )
      const translated = await translationStore.translate(
        newText.value,
        langCode
      )

      chatStore.addTransText(newText.value, translated)
      newText.value = ''

      nextTick(scrollToBottom)
    }
  }

  const scrollToBottom = () => {
    nextTick(() => {
      if (textContainer.value) {
        textContainer.value.scrollTop = textContainer.value.scrollHeight
      }
    })
  }
</script>

<template>
  <div class="translate-box" v-if="props.friendData">
    <h3>Translate to {{ props.friendData.teaching_language }}</h3>
    <div ref="textContainer" class="text-container">
      <div
        v-for="(entry, index) in chatStore.translatedText"
        :key="index"
        class="text-bubble"
      >
        <p>
          <strong>{{ entry.text }}</strong>
        </p>
        <p>🌍 {{ entry.translation }}</p>
      </div>

      <div class="input-container">
        <input v-model="newText" type="text" @keyup.enter="translateText" />
        <button @click="translateText">Translate</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h3 {
    font-size: 1.2em;
    color: #fef3e2;
  }

  .translate-box {
    background: rgba(0, 0, 0, 0.5);
    outline: 2px solid rgba(250, 64, 50, 0.5);
    margin: 10px;
    border-radius: 10px;
    max-height: calc(85vh - 85px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }

  .text-container {
    max-height: 60vh;
    overflow-y: auto;
  }

  .text-bubble {
    max-width: 90%;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    word-wrap: break-word;
    align-items: center;
    background: rgba(250, 64, 50, 0.5);
    p {
      color: #fef3e2;
      margin-bottom: 5px;
    }
  }

  .input-container {
    width: 100%;
    display: flex;
    gap: 10px;
    padding: 10px;
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
      background-color: rgba(250, 64, 50, 0.6);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    }
  }
</style>
