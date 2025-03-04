<script setup>
  import { ref } from 'vue'
  import { useProfileStore } from '../stores/profileStore'
  import { useRouter } from 'vue-router'

  const profileStore = useProfileStore()
  const router = useRouter()

  // Kopiera användardata så vi inte uppdaterar direkt innan sparning
  const editedUser = ref({ ...profileStore.profile })

  const saveChanges = () => {
    profileStore.updateProfile(editedUser.value)
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

      <label>Biography:</label>
      <textarea v-model="editedUser.bio" />
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
