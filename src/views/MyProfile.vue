<script setup>
  import { ref, onMounted } from 'vue'
  import { useProfileStore } from '../stores/profileStore'
  import { useUserStore } from '../stores/userStore'
  import { useFriendStore } from '../stores/friendStore'

  const friendStore = useFriendStore()
  const selectedUser = ref(null)
  const userData = ref([])
  const profileStore = useProfileStore()
  const userStore = useUserStore()
  const avatarUrl = profileStore.profile.avatar
    ? `/src/bilder/${profileStore.profile.avatar}`
    : '/src/bilder/avatar_3.png'

  onMounted(() => {
    fetch('/data/userData.JSON')
      .then((response) => response.json())
      .then((result) => {
        userData.value = result
        selectedUser.value = userData.value.find(
          (user) => user.username === friendStore.currentFriend
        )
      })
  })
</script>

<template>
  <header>
    <h1>My Profile</h1>

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
      <img
        alt="Profilbild"
        :src="selectedUser.profile_picture"
        class="ProfileFriend"
    /></RouterLink>
  </header>
  <main>
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
        {{ userStore.user.LearningLanguage }}
      </p>
      <p>
        <strong>Language I can teach</strong>:
        {{ userStore.user.TeachingLanguage }}
      </p>
      <div class="EditButton">
        <router-link to="/EditProfile">Redigera profil</router-link>
      </div>
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

  .ChatText {
    padding-right: 22px;
  }

  .ProfileFriend {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 10px;
    right: 20px;
  }

  .ProfileImage {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  a {
    color: black;
  }
</style>
