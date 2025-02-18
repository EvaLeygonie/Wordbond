<script setup>

</script>

<template>
  <h1>WordBond</h1>
<nav>
  <RouterLink to="/">Matches</RouterLink>
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/myprofile">My Profile</RouterLink>
  <RouterLink to="/chat">Chat</RouterLink>
</nav>

<main>
  <RouterView />
</main>

</template>
