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
    <h2>Edit profile</h2>
    <form @submit.prevent="saveChanges">
      <label><strong>Username:</strong></label>
      <input placeholder="Name" v-model="editedUser.name" type="text" />

      <label><strong>Password:</strong></label>
      <input
        placeholder="Password"
        v-model="editedUser.password"
        type="password"
      />
      <label><strong>Age:</strong></label>
      <input placeholder="Age" v-model="editedUser.age" type="text" />

      <label><strong>Biography:</strong></label>
      <textarea
        placeholder="Tell me something about yourself"
        v-model="editedUser.bio"
      />
      <label><strong>Language to learn:</strong></label>
      <input
        placeholder="Language you want to learn"
        v-model="editedUser.languageToLearn"
        type="text"
      />
      <label><strong>Language to teach:</strong></label>
      <input
        placeholder="Language you can teach"
        v-model="editedUser.languageToTeach"
        type="text"
      />
      <label><strong>Interests:</strong></label>
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
          /><strong> {{ interest }}</strong>
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
  textarea {
    width: 190px;
    height: 100px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .chooseInterests {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: right;
  }
  .chooseInterests label {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .chooseInterests input {
    display: flex;
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
