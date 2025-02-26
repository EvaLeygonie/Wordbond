<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="EditProfile">
    <h2></h2>
    <form @submit.prevent="savePrrofile">
      <label for="username">Username</label>
      <input id="username" v-model="profile.username" type="text" required />

      <label for="email">Email</label>
      <input id="email" v-model="profile.email" type="email" required />
      <label for="bio">Biografy</label
      ><textarea id="bio" v-model="profile.bio"></textarea>
    </form>
  </div>
</template>
