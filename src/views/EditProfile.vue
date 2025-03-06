<script setup>
  import { ref } from 'vue'
  import { useProfileStore } from '../stores/profileStore'
  import { useRouter } from 'vue-router'

  const profileStore = useProfileStore()
  const router = useRouter()

  // Kopiera användardata så vi inte uppdaterar direkt innan sparning
  const editedUser = ref({ ...profileStore.profile })

  const saveChanges = () => {
    profileStore.update(editedUser.value)
    router.push('/Myprofile') // Navigera tillbaka till profilsidan
    console.log(saveChanges)
  }
</script>

<template>
  <div class="EditProfile">
    <h2>Redigera profil</h2>
    <form @submit.prevent="saveChanges">
      <label>Username:</label>
      <input v-model="editedUser.name" type="text" />

      <label>Password:</label>
      <input v-model="editedUser.password" type="password" />
      <label>Age</label>
      <input v-model="editedUser.age" type="text" />

      <label>Biography:</label>
      <textarea v-model="editedUser.bio" />
      <label>Language to learn</label>
      <input v-model="editedUser.LearningLanguage" type="text" />
      <label>Language to teach</label>
      <input v-model="editedUser.TeachingLanguage" />
      <label>Interests:</label>
      <div class="chooseInterests">
        <label
          v-for="interest in [
            'Travel',
            'Music',
            'Gaming',
            'Cooking',
            'Reading',
            'Sports'
          ]"
          :key="interest"
        >
          <input
            type="checkbox"
            v-model="editedUser.interests"
            :value="interest"
          />
          {{ interest }}
        </label>
      </div>
      <div class="SaveButtonContainer">
        <button class="SaveButton" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<style>
  main {
    margin-top: 30px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .SaveButtonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
  .SaveButton {
    width: 100px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    background-color: #fa812f;
  }
</style>
