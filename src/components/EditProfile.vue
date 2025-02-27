<script setup>
  import { ref } from 'vue'

  const name = ref('LinguaLover')
  const learningLanguage = ref('Swedish')
  const teachingLanguage = ref('Spanish')
  const profileText = ref(
    'Hi! I would love to learn Spanish before my trip to Madrid this summer.'
  )

  const saveProfile = () => {
    console.log('Profile saved', {
      name: name.value,
      teachingLanguage: teachingLanguage.value,
      learningLanguage: learningLanguage.value,
      profileText: profileText.value
    })
  }
</script>

<template>
  <div class="EditProfileContainer">
    <h1>Edit profile</h1>

    <label for="username">Username</label>
    <input id="username" v-model="name" type="text" />

    <label for="teachingLanguage">Language I can teach</label>
    <input id="teachingLanguage" v-model="teachingLanguage" type="text" />

    <label for="learningLanguage">Language I want to learn</label>
    <input id="learningLanguage" v-model="learningLanguage" type="text" />

    <label for="profileText">Profile Text</label>
    <textarea id="profileText" v-model="profileText" />

    <button @click="saveProfile">Save</button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
</style>
