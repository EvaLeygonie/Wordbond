<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const interests = ref(["Cooking", "Travel"]);
const
</script>

<template>
  <header class="ProfileHeader">
    <RouterLink
      :to="{
        path: '/chat',
        query: { language: 'Spanish', name: 'TalkativeTim' },
      }"
    >
      <img alt="Profilbild" src="/bilder/avatar_8.png" class="ProfileFriend" />
    </RouterLink>
    <p class="ChatText">Chat</p>
    <h1 class="ProfileText">My Profil</h1>
  </header>

  <main class="MainContainer">
    <div class="ImageContainer">
      <img alt="Profilbild" src="/bilder/avatar_3.png" class="ProfileImage" />
    </div>

    <h1>LinguaLover</h1>
    <p class="ProfileText">
      I speak <span>Swedish</span>. I want to learn <span>Spanish</span>
    </p>

    <p class="ProfileText">
      Hi! I would love to learn Spanish before my trip to Madrid this summer.
    </p>

    <h3>Interests</h3>
    <ul class="interest-container">
      <li class="InterestTag" v-for="interest in interests" :key="interest">
        {{ interest }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
span {
  text-decoration: underline;
}

.ProfileHeader {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 30px;
  flex-direction: column;
}

.ProfileText {
  display: flex;
  width: 100%;
  justify-content: center;
}

.ChatText {
  padding-right: 22px;
}

.ProfileFriend {
  width: 80px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.2);
  margin: 5px;
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
