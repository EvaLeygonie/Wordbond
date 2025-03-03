<script setup>
  import { useUserStore } from '../stores/userStore'

  const userStore = useUserStore()
  const avatarUrl = '/bilder/avatar_3.png'
</script>

<template>
  <header>
    <h2>Min profil</h2>

    <RouterLink
      :to="{
        path: '/chat',
        query: { language: 'Spanish', name: 'TalkativeTim' }
      }"
    >
      <img
        alt="Profilbild"
        src="/public\bilder\avatar_8.png"
        class="ProfileFriend"
    /></RouterLink>
  </header>
  <main>
    <img :src="avatarUrl" alt="Avatar" class="ProfileImage" />

    <p><strong>Namn:</strong> {{ userStore.user.name }}</p>
    <p><strong>Email:</strong> {{ userStore.user.email }}</p>
    <p><strong>Biograph:</strong> {{ userStore.user.bio }}</p>
    <p>
      <strong>Language I want to learn:</strong>
      {{ userStore.user.LearningLanguage }}
    </p>
    <p>
      <strong>Language I can teach : </strong>
      {{ userStore.user.TeachingLanguage }}
    </p>

    <router-link to="/EditProfile">Redigera profil</router-link>

    <main>
      <div>
        <!-- <div class="ImageContainer">
        <img
          alt="Profilbild"
          src="/public\bilder\avatar_3.png"
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
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 20px;
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

  .ProfileHeader {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin: 30px;
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

  .InterestTag {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2);
    margin: 5px;
    padding: 10px;
    background-color: #fa812f;
    color: #fef3e2;
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
  }
</style>
