<script setup>
import { ref, computed } from 'vue'

const userData = ref([])

const props = defineProps({
    searchString: String
})

fetch('../public/data/userData.JSON')
    .then((response) => response.json())
    .then((result) => {
        userData.value = result
    })

const filteredUsers = computed(() => {
    if (!props.searchString) return userData.value
    return userData.value.filter(
        (user) =>
            user.teaching_language.toLowerCase().includes(props.searchString.toLowerCase()) ||
            user.interests[0].toLowerCase().includes(props.searchString.toLowerCase()) ||
            user.interests[1].toLowerCase().includes(props.searchString.toLowerCase()) ||
            user.username.toLowerCase().includes(props.searchString.toLowerCase())
    )
})
</script>

<template>
    <section>
        <div v-for="user in filteredUsers">
            <a href="">
                <img :src="user.profile_picture" :alt="user.username" />
                <h2>{{ user.username }}</h2>
                <p>Can teach: {{ user.teaching_language }}</p>
                <p>Learning: {{ user.learning_language }}</p>
                <p>Interests: {{ user.interests[0] }} & {{ user.interests[1] }}</p>
            </a>
        </div>
    </section>
</template>

<style scoped>
img {
    width: 100%;
    margin-bottom: 1em;
}

img:hover {
    transform: scale(1.05);
    transition: transform 0.5s 150ms;
}

section {
    padding: 2em;
    display: grid;
    grid-template-columns: 60vw;
    margin: auto;
    width: fit-content;
    gap: 2em;
}

div {
    background-color: #ffffff;
    padding: 2em;
    border-radius: 20px;
}

a {
    text-decoration: none;
    color: #575555;
}

h2 {
    font-size: 1.1em;
    text-align: left;
}

p {
    font-size: 0.9em;
    text-align: left;
    margin-top: 1em;
    margin-bottom: 0;
}

@media only screen and (min-width: 600px) {
    section {
        grid-template-columns: 30vw 30vw;
    }
}

@media only screen and (min-width: 1000px) {
    section {
        grid-template-columns: 20vw 20vw 20vw;
    }
}
</style>
