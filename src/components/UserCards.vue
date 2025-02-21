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
    return userData.value.filter((user) => user.teaching_language.toLowerCase().includes(props.searchString.toLowerCase()))
})
</script>

<template>
    <section>
        <div v-for="user in filteredUsers">
            <img src="" :alt="user.username" />
            <h2>{{ user.username }}</h2>
            <p>Can teach: {{ user.teaching_language }}</p>
            <p>Learning: {{ user.learning_language }}</p>
            <p>Interests: {{ user.interests[0] }} & {{ user.interests[1] }}</p>
        </div>
    </section>
</template>

<style scoped>
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

h2 {
    font-size: 1.1em;
    text-align: left;
}

p {
    font-size: 0.8em;
    text-align: left;
    margin-top: 1em;
}

@media only screen and (min-width: 600px) {
    section {
        grid-template-columns: 40vw 40vw;
    }
}

@media only screen and (min-width: 800px) {
    section {
        grid-template-columns: 22vw 22vw 22vw;
    }
}
</style>
