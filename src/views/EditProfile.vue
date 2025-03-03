<script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../stores/userStore'
  import { useRouter } from 'vue-router'

  const userStore = useUserStore()
  const router = useRouter()

  // Kopiera användardata så vi inte uppdaterar direkt innan sparning
  const editedUser = ref({ ...userStore.user })

  const saveChanges = () => {
    userStore.updateProfile(editedUser.value)
    router.push('/Myprofile') // Navigera tillbaka till profilsidan
  }
</script>

<template>
  <div class="EditProfile">
    <h2>Redigera profil</h2>
    <form @submit.prevent="saveChanges">
      <label>Namn:</label>
      <input v-model="editedUser.name" type="text" />

      <label>Email:</label>
      <input v-model="editedUser.email" type="email" />

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
