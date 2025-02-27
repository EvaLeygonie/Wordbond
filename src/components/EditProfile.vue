<script setup>
  import { ref } from 'vue'

  const username = ref('LinguaLover')
  const password = ref('IloveBooks')
  const learningLanguage = ref('Swedish')
  const teachingLanguage = ref('Spanish')
  const profileText = ref(
    'Hi! I would love to learn Spanish before my trip to Madrid this summer.'
  )

  const saveProfile = () => {
    alert('Profile saved', {
      username: usernamename.value,
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

    <input id="username" v-model="username" type="text" />
    <label for="password" />password<input
      id="password"
      v-model="password"
      type="password"
    />

    <label for="teachingLanguage">Language I can teach</label>
    <input id="teachingLanguage" v-model="teachingLanguage" type="text" />

    <label for="learningLanguage">Language I want to learn</label>
    <input id="learningLanguage" v-model="learningLanguage" type="text" />

    <label for="profileText">Biograph</label>
    <textarea id="profileText" v-model="profileText" />

    <div class="buttonContainer">
      <button @click="saveProfile">Save</button>
      <RouterLink to="/myprofile"
        ><button class="edit-button">Cancel</button></RouterLink
      >
    </div>
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
  .buttonContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  textarea {
    width: 200px;
    height: 150px;
  }
  button {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2);
    margin: 5px;
    padding: 5px;
    background-color: #fa812f;
    color: #fef3e2;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    border-color: #fa812f;
  }
</style>
