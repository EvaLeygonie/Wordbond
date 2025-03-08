<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useProfileStore } from '../stores/profileStore'
  import { useFriendStore } from '../stores/friendStore'
  import { useLoginStore } from '../stores/loginStore'

  const router = useRouter()
  const profileStore = useProfileStore()
  const friendStore = useFriendStore()
  const loginStore = useLoginStore()

  const name = ref('')
  const password = ref('')
  const age = ref('')
  const bio = ref('')
  const chosenAvatar = ref('')
  const interests = ref([])
  const dropDown = ref(false)
  const languageToLearn = ref('')
  const languageToTeach = ref('')

  const avatarPicture = [
    'avatar_1.png',
    'avatar_2.png',
    'avatar_3.png',
    'avatar_4.png',
    'avatar_5.png',
    'avatar_6.png',
    'avatar_7.png',
    'avatar_8.png',
    'avatar_9.png'
  ]
  const createdProfile = () => {
    if (name.value && age.value && chosenAvatar.value) {
      const profileData = {
        name: name.value,
        password: password.value,
        age: age.value,
        bio: bio.value,
        avatar: chosenAvatar.value,
        interests: interests.value,
        languageToLearn: languageToLearn.value,
        languageToTeach: languageToTeach.value
      }
      profileStore.use(profileData)
      loginStore.loggedIn = true
      router.push('/MyProfile')
      friendStore.removeFriend()
    } else {
      alert('Please fill in everything')
    }
  }

  const getAvatar = (avatar) => {
    chosenAvatar.value = avatar
    dropDown.value = false
  }
</script>

<template>
  <div class="profile-container">
    <div class="profile-box">
      <h2>Create your profile!</h2>

      <label>Username:</label>
      <input type="text" v-model="name" placeholder="Name..." required />

      <label>Password:</label>
      <input
        type="password"
        v-model="password"
        placeholder="Password..."
        required
      />

      <label>Age:</label>
      <input type="text" v-model="age" placeholder="Age..." required />

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
      </div>

      <label>Biograph:</label>
      <textarea
        v-model="bio"
        placeholder="Tell me something about yourself :)"
      />

      <label>Language I want to learn:</label>
      <input type="text" v-model="languageToLearn" required />

      <label>Language I can teach:</label>
      <input type="text" v-model="languageToTeach" required />

      <div class="avatar-dropdown">
        <div class="get-avatar" @click="dropDown = !dropDown">
          <img
            v-if="chosenAvatar"
            :src="`/src/bilder/${chosenAvatar}`"
            alt="Avatar"
          />
          <span v-else class="avatar-standard">Choose your Avatar!</span>
        </div>
        <div v-if="dropDown" class="dropdown-menu">
          <img
            v-for="avatar in avatarPicture"
            :key="avatar"
            :src="`/src/bilder/${avatar}`"
            :alt="avatar"
            @click="getAvatar(avatar)"
          />
        </div>
      </div>

      <div class="profile-button">
        <button @click="createdProfile">Create Profile!</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 100px;
  }

  .profile-box {
    padding: 30px;
    border-radius: 8px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 20px;
  }

  label {
    font-weight: bold;
  }

  .chooseInterests {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
  }

  .avatar-dropdown {
    position: relative;
    width: 200px;
    margin-bottom: 10px;
  }

  .get-avatar {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  .get-avatar img {
    width: 40px;
    height: 40px;
  }

  .dropdown-menu {
    position: absolute;
    width: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    border: 2px;
  }

  .dropdown-menu img {
    width: 40px;
    height: 40px;
  }

  .avatar-standard {
    cursor: pointer;
    text-decoration: underline;
  }

  .profile-button {
    display: flex;
    justify-content: center;
  }

  .profile-button button {
    width: 100px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    background-color: #fa812f;
  }

  .profile-button button:hover {
    cursor: pointer;
    background-color: #fab12f;
  }
</style>
