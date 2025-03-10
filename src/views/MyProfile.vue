<script setup>
  import { ref, watchEffect } from 'vue'
  import { useProfileStore } from '../stores/profileStore'
  import { useFriendStore } from '../stores/friendStore'
  import { useLoginStore } from '../stores/loginStore'
  import { useRouter } from 'vue-router'

  const friendStore = useFriendStore()
  const selectedUser = ref(null)
  const profileStore = useProfileStore()
  const loginStore = useLoginStore()
  const router = useRouter()

  const logout = () => {
    loginStore.logout()
    router.push('/')
  }

  const avatarUrl = profileStore.profile.avatar
    ? `/src/bilder/${profileStore.profile.avatar}`
    : '/src/bilder/avatar_3.png'

  watchEffect(() => {
    if (friendStore.currentFriend) {
      friendStore.fetchFriend(friendStore.currentFriend).then((result) => {
        selectedUser.value = result
      })
    }
  })
</script>

<template>
  <header class="FriendContainer">
    <img
      v-if="selectedUser"
      alt="Profilbild"
      :src="selectedUser.profile_picture"
      class="ProfileFriend"
    />
    <RouterLink
      v-if="selectedUser"
      :to="{
        path: '/otherprofile',
        query: { name: friendStore.currentFriend }
      }"
    >
      <button class="FriendButton">
        Your friend is {{ friendStore.currentFriend }}
      </button>
    </RouterLink>
    <RouterLink
      v-if="selectedUser"
      :to="{
        path: '/chat',
        query: {
          name: friendStore.currentFriend,
          language: selectedUser.teaching_language
        }
      }"
    >
      <button class="FriendButton">Chat with friend</button>
    </RouterLink>
  </header>
  <main>
    <h1>Profile</h1>
    <div class="MainContainer">
      <img :src="avatarUrl" alt="Avatar" class="ProfileImage" />

      <p><strong>Username</strong>: {{ profileStore.profile.name }}</p>
      <p><strong>Age</strong>: {{ profileStore.profile.age }}</p>
      <p><strong>Biography</strong>: {{ profileStore.profile.bio }}</p>
      <p>
        <strong>Interests</strong>:
        {{ profileStore.profile.interests.join(', ') }}
      </p>
      <p>
        <strong>Language I want to learn</strong>:
        {{ profileStore.profile.languageToLearn }}
      </p>
      <p>
        <strong>Language I can teach</strong>:
        {{ profileStore.profile.languageToTeach }}
      </p>
      <div class="EditButton">
        <router-link to="/EditProfile">Edit profile</router-link>
      </div>

      <button class="logout-button" @click="logout">Logout</button>
    </div>
    <main>
      <div>
        <!-- <div class="ImageContainer">
        <img
          alt="Profilbild"
          src="/src\bilder\avatar_3.png"
          class="ProfileImage"
        />
      </div> -->
      </div>
    </main>
  </main>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: right;
    align-items: center;

    position: absolute;
    width: 100%;
    height: 100px;
  }
  .FriendContainer {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }

  .FriendContainer a {
    font-size: 12px;
  }
  .FriendButton {
    border: none;
    margin: 10px;
    border-radius: 4px;
    font-size: 1.1em;
    background-color: #fa812f;
    padding: 0.6em;
  }

  span {
    text-decoration: underline;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .MainContainer {
    background-color: #fff;
    width: 400px;
    height: 500px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ProfileHeader {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    flex-direction: column;
  }

  P {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  .ChatText {
    padding-right: 22px;
  }

  .ProfileFriend {
    width: 80px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
  }

  .ProfileImage {
    width: 150px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
  }

  .MainContainer {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .ProfileText {
    margin: 10px;
  }

  .interest-container {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .EditButton {
    width: 130px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    background-color: #fa812f;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logout-button {
    margin-top: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    background-color: #fa812f;
  }
  a {
    color: black;
  }

  button:hover,
  .EditButton:hover {
    background-color: #fab12f;
  }
</style>
