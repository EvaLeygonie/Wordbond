<script setup>
  // const logoImage = new URL('../public/logo/wordbond.svg', import.meta.url).href
</script>

<template>
  <header>
    <!-- <img :src="logoImage" alt="logo"> -->
  </header>

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
