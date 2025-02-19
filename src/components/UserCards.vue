<script setup>
    import {ref} from 'vue'

    const userData = ref([])

    fetch('../public/data/userData.JSON')
    .then((response) => response.json())
    .then((result) => {
        userData.value = result
        console.log(userData.value)
    })
</script>

<template>
    <section>
        <div v-for="user in userData">
            <img src="" alt="">
            <h3>{{ user.username }}</h3>
            <p>Can teach: {{ user.teaching_language }}</p>
            <p>Interests: {{ user.interests[0] }} & {{ user.interests[1] }} </p>
        </div>
    </section>
</template>

<style scoped>
    section {
        padding: 2em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: auto;
        width: fit-content;
        gap: 4em;
    }

    div {
        background-color: #ffffff;
        padding: 2em;
        border-radius: 20px;
    }

    h3 {
        font-size: 1em;
    }

    p {
        font-size: 0.8em;
        text-align: left;
        margin-top: 1em;
    }
</style>
