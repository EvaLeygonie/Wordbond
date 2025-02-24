<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import UserCards from '../components/UserCards.vue'

const searchString = ref('')

function handleSearch(receivedInput) {
    searchString.value = receivedInput
}
</script>

<template>
    <div>
        <h1 class="title">Find your language buddy!</h1>
        <SearchBar @search="handleSearch" />
        <RouterLink to="/myprofile"><UserCards :search-string="searchString" /></RouterLink>
    </div>
    <footer>
        <a href="http://www.freepik.com">Avatars designed by Freepik</a>
    </footer>
</template>

<style scoped>
div {
    min-height: 100vh;
}

.title {
    padding: 1em;
    color: #575555;
}

footer {
    margin-top: 2em;
    padding: 2em;
    background-color: #fa812f;
}

a {
    font-family: MyFontStandard, sans-serif;
    text-decoration: none;
    color: #ffffff;
    font-size: 0.8em;
}

a:hover {
    color: #5c5c5c;
}
</style>
