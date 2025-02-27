<script setup>
  import { ref, computed, watchEffect } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const username = computed(() => route.query.name)
  const userData = ref([])
  const selectedUser = ref(null)
  const request = ref('Send friend-request')

  fetch('/data/userData.JSON')
    .then((response) => response.json())
    .then((result) => {
      userData.value = result
      selectedUser.value = userData.value.find(
        (user) => user.username === username.value
      )
    })

  function confirmation() {
    if (request.value === 'Send friend-request') {
      alert(`${selectedUser.value.username} has accepted your friend-request!`)
      request.value = 'Send message'
    } else {
      alert('In progress')
    }
  }
</script>

<template>
  <RouterLink :to="{ path: '/findfriend' }"
    ><i class="bi bi-arrow-left-short"
  /></RouterLink>
  <div id="frame" v-if="selectedUser">
    <h1>{{ selectedUser.username }}</h1>
    <p id="age">Age: {{ selectedUser.age }}</p>
    <img :src="selectedUser.profile_picture" :alt="selectedUser.username" />
    <p>
      I speak <b>{{ selectedUser.teaching_language }}</b> and want to learn
      <b>{{ selectedUser.learning_language }}</b>
    </p>
    <h2>Interests:</h2>
    <p>
      <span class="interests">{{ selectedUser.interests[0] }}</span>
      <span class="interests">{{ selectedUser.interests[1] }}</span>
    </p>
    <h2>"{{ selectedUser.quote }}"</h2>
    <input
      id="request_button"
      type="button"
      :value="request"
      @click="confirmation"
    />
  </div>
  <div v-else>
    <p>No user found.</p>
  </div>
</template>

<style scoped>
  p,
  h2,
  h1 {
    color: #575555;
  }

  #frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 3em;
    margin-bottom: 3em;
    width: 90vw;
    background-color: #ffffff;
    padding: 3em;
    border-radius: 20px;
  }

  img {
    padding: 1em;
    width: 70%;
  }

  h1 {
    text-align: center;
  }

  #age {
    margin: 0.1em;
  }

  .interests {
    color: #ffffff;
    background-color: #fab12f;
    font-weight: bold;
    border-radius: 20px;
    padding: 0.6em 0.9em 0.6em;
    margin-top: 0;
    margin-left: 0.4em;
    margin-bottom: 1em;
  }

  h2 {
    margin-top: 1.3em;
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  p {
    font-size: 0.9em;
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  i {
    position: absolute;
    font-size: 4em;
    color: #fa812f;
    margin-left: 0.7em;
  }

  i:hover {
    color: #fab12f;
  }

  input {
    margin-top: 0.7em;
    border: none;
    font-weight: bold;
    border-radius: 30px;
    padding: 0.6em 0.9em 0.6em;
    color: #ffffff;
    background-color: #fa812f;
    font-size: 0.9em;
  }

  input:hover {
    background-color: #fab12f;
  }
</style>
