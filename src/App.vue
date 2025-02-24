<script setup>
import { ref } from 'vue'

let blockOrNone = ref('none')

let icon = ref('bi bi-list')

function toggleMenu() {
    blockOrNone.value = blockOrNone.value === 'none' ? 'block' : 'none'
    icon.value = icon.value === 'bi bi-list' ? 'bi bi-x' : 'bi bi-list'
}
</script>

<template>
   <nav id="mobile_nav">
      <i :class="icon" @click="toggleMenu"></i>
  </nav>

  <div id="router_links" :style="{ display: blockOrNone }">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/matchpage">Matches</RouterLink>
    <RouterLink to="/myprofile">My Profile</RouterLink>
    <RouterLink :to="{ path: '/chat', query: { language: 'Spanish', name: 'TalkativeTim' } }">Chat</RouterLink>
  </div>

  <nav id="desktop_nav">
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/matchpage">Matches</RouterLink>
    <RouterLink to="/myprofile">My Profile</RouterLink>
    <RouterLink :to="{ path: '/chat', query: { language: 'Spanish', name: 'TalkativeTim' } }">Chat</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  background: #fa812f;
  margin: 0;
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
  justify-content: right;
}

#desktop_nav {
  display: none;
}

@media only screen and (min-width: 600px) {
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
