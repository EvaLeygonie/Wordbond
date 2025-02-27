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
        selectedUser.value = userData.value.find((user) => user.username === username.value)
    })

function confirmation() {
    if (request.value === 'Send friend-request') {
        alert(`${ selectedUser.value.username } has accepted your friend-request!`)
        request.value = 'Send message'
    } else {
        alert('In progress')
    }
}
</script>

<template>
    <div id="frame" v-if="selectedUser">
        <h1>{{ selectedUser.username }}</h1>
        <div class="flexbox">
            <div class="content">
                <h2>"{{ selectedUser.quote }}"</h2>
                <p>Can teach: {{ selectedUser.teaching_language }}</p>
                <p>Learning: {{ selectedUser.learning_language }}</p>
                <p>Interests: {{ selectedUser.interests[0] }} & {{ selectedUser.interests[1] }}</p>
            </div>
            <img class="content" :src="selectedUser.profile_picture" :alt="selectedUser.username" />
        </div>
        <input type="button" :value="request" @click="confirmation">
    </div>
    <div v-else>
        <p>No user found.</p>
    </div>
</template>

<style scoped>
#frame {
    margin: auto;
    margin-top: 2.5em;
    margin-bottom: 3em;
    width: 60vw;
    background-color: #ffffff;
    padding: 3em;
    border-radius: 20px;
}

.flexbox {
    display: flex;
}

.content {
    margin: auto;
}

img {
    padding: 1em;
    width: 30vw;
}

h1 {
    margin: 0.3em;
    text-align: center;
}

h2 {
    text-align: left;
}

p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 1em;
    margin-bottom: 0;
}
</style>
