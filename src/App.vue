<script setup>
  import { ref } from 'vue'
  const logoWhite = new URL('../public/logo/logo-white.png', import.meta.url)
    .href

  let blockOrNone = ref('none')

  let icon = ref('bi bi-list')

  function toggleMenu() {
    blockOrNone.value = blockOrNone.value === 'none' ? 'block' : 'none'
    icon.value = icon.value === 'bi bi-list' ? 'bi bi-x' : 'bi bi-list'
  }
</script>

<template>
  <nav id="mobile_nav">
    <img :src="logoWhite" alt="logo" />
    <i :class="icon" @click="toggleMenu" />
  </nav>

  <div id="router_links" :style="{ display: blockOrNone }">
    <RouterLink to="/" @click="toggleMenu">Login</RouterLink>
    <RouterLink to="/findfriend" @click="toggleMenu">Find Friend</RouterLink>
    <RouterLink to="/myprofile" @click="toggleMenu">My Profile</RouterLink>
    <RouterLink
      :to="{
        path: '/chat',
        query: { language: 'Spanish', name: 'TalkativeTim' }
      }"
      @click="toggleMenu"
      >Chat</RouterLink
    >
  </div>

  <nav id="desktop_nav">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/findfriend">Find Friend</RouterLink>
    <RouterLink to="/myprofile">My Profile</RouterLink>
    <RouterLink
      :to="{
        path: '/chat',
        query: { language: 'Spanish', name: 'TalkativeTim' }
      }"
      >Chat</RouterLink
    >
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  main {
    min-height: 33vh;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    background: #fa812f;
    margin: 0;
    img {
      height: 45px;
      padding-left: 5px;
    }
  }

  a {
    font-family: HeaderFont, serif;
    font-weight: 700;
    color: #fef3e2;
    text-decoration: none;
  }

  i {
    transform: scale(2.6);
    color: #fef3e2;
    cursor: pointer;
    margin-right: 1em;
  }

  #router_links a {
    background-color: #fa812f;
    display: block;
    text-align: center;
    padding-bottom: 1.5em;
    font-size: 1.2em;
  }

  #mobile_nav {
    justify-content: space-between;
  }

  #desktop_nav {
    display: none;
  }

  @media screen and (min-width: 600px) {
    #desktop_nav {
      display: flex;
    }

    #mobile_nav {
      display: none;
    }

    #router_links a {
      display: none;
    }
  }
</style>
