<script setup>
  import { ref, computed, watchEffect } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useFriendStore } from '../stores/friendStore'

  const route = useRoute()
  const router = useRouter()
  const username = computed(() => route.query.name)
  const selectedUser = ref(null)
  const request = ref('Send friend-request')
  const activeLink = ref(false)
  const friendStore = useFriendStore()

  function goBack() {
    router.go(-1)
  }

  watchEffect(() => {
    if (username.value) {
      friendStore.fetchFriend(username.value).then((result) => {
        selectedUser.value = result
      })
    }
  })

  function confirmation() {
    if (!selectedUser.value) return

    if (
      friendStore.currentFriend &&
      friendStore.currentFriend !== selectedUser.value.username
    ) {
      alert(
        `You can only have one friend at a time. Your current friend is ${friendStore.currentFriend}`
      )
    } else {
      alert(`${selectedUser.value.username} accepted your friend request!`)
      request.value = 'Send message'
      friendStore.addFriend(selectedUser.value.username)
      activeLink.value = true
    }
  }

  watchEffect(() => {
    if (selectedUser.value) {
      if (friendStore.currentFriend === selectedUser.value.username) {
        request.value = 'Send message'
        activeLink.value = true
      } else {
        request.value = 'Send friend-request'
        activeLink.value = false
      }
    }
  })

  function removeFriend() {
    friendStore.removeFriend()
    request.value = 'Send friend-request'
    activeLink.value = false
  }
</script>

<template>
  <i class="bi bi-arrow-left-short" @click="goBack" />
  <div id="frame" v-if="selectedUser">
    <div id="title">
      <h1>{{ selectedUser.username }}</h1>
      <p id="age">Age: {{ selectedUser.age }}</p>
    </div>
    <img :src="selectedUser.profile_picture" :alt="selectedUser.username" />
    <div id="languages">
      <h2>Languages</h2>
      <p>
        I speak <b>{{ selectedUser.teaching_language }}</b> and want to learn
        <b>{{ selectedUser.learning_language }}</b>
      </p>
    </div>
    <div id="interests">
      <h2>Interests</h2>
      <p id="languages_paragraph">
        <span class="interests">{{ selectedUser.interests[0] }}</span>
        <span class="interests">{{ selectedUser.interests[1] }}</span>
      </p>
    </div>
    <h2 id="quote">"{{ selectedUser.quote }}"</h2>
    <div v-if="activeLink">
      <RouterLink
        :to="{
          path: '/chat',
          query: {
            name: selectedUser.username,
            language: selectedUser.teaching_language
          }
        }"
        ><input class="request_button" type="button" :value="request"
      /></RouterLink>
      <input type="button" value="Remove friend" @click="removeFriend()" />
    </div>
    <input
      v-else
      class="request_button"
      type="button"
      :value="request"
      @click="confirmation()"
    />
  </div>
</template>

<style scoped>
  p,
  h2,
  h1 {
    color: #575555;
  }

  #frame {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5em;
    place-items: center;
    margin: 0em 1.5em 3em;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 2em 2em 4.8em;
  }

  img {
    width: 70%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  #languages_paragraph {
    margin-top: 1em;
  }

  .interests {
    color: #ffffff;
    background-color: #fab12f;
    font-weight: bold;
    border-radius: 20px;
    padding: 0.6em 0.9em 0.6em;
    margin-left: 0.4em;
  }

  h2 {
    font-size: 1.2em;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 0.2em;
  }

  i {
    margin-left: 0.2em;
    font-size: 4em;
    color: #fa812f;
    cursor: pointer;
  }

  i:hover {
    color: #fab12f;
  }

  input {
    margin-top: 0.7em;
    margin-left: 0.4em;
    border: none;
    font-weight: bold;
    border-radius: 30px;
    padding: 0.6em 0.9em 0.6em;
    color: #ffffff;
    background-color: #fa812f;
    font-size: 0.9em;
    width: fit-content;
  }

  input:hover {
    background-color: #fab12f;
  }

  @media screen and (min-width: 600px) {
    #title {
      grid-area: title;
    }
    img {
      grid-area: img;
    }
    #languages {
      grid-area: languages;
    }
    #interests {
      grid-area: interests;
    }
    #quote {
      grid-area: quote;
    }
    #request_button {
      grid-area: request_button;
    }

    #frame {
      margin: 0em 5em 5em;
      gap: 1em;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'title interests'
        'img quote'
        'languages request_button';
    }
  }

  @media screen and (min-width: 900px) {
    #frame {
      margin: 0em 12em 5em;
      grid-template-areas:
        'title languages'
        'img interests'
        'img quote'
        'img request_button';
    }

    #languages {
      padding-top: 5em;
    }
  }
</style>
