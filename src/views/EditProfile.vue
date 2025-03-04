<script setup>
  import { ref } from 'vue'
  import { useProfileStore } from '../stores/profileStore'
  import { useRouter } from 'vue-router'

  const profileStore = useProfileStore()
  const router = useRouter()

  // Kopiera användardata så vi inte uppdaterar direkt innan sparning
  const editedUser = ref({ ...profileStore.profile })

  const saveChanges = () => {
    profileStore.updateProfile(editedProfile.value)
    router.push('/Myprofile') // Navigera tillbaka till profilsidan
  }
</script>

<template>
  <div class="EditProfile">
    <h2>Redigera profil</h2>
    <form @submit.prevent="saveChanges">
      <label>Username:</label>
      <input v-model="editedUser.userName" type="text" />

      <label>Password:</label>
      <input v-model="editedUser.password" type="password" />

      <label>Biografi:</label>
      <textarea v-model="editedUser.bio" />
      <label>Choose your interests:</label>
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
          <input type="checkbox" v-model="interests" :value="interest" />
          {{ interest }}
        </label>

        <button type="submit">Spara</button>
      </div>
    </form>
  </div>
</template>

<style>
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
