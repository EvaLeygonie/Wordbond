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
        <UserCards :search-string="searchString" />
    </div>
</template>

<style scoped>
div {
    min-height: 100vh;
}

.title {
    padding: 1em;
    color: #575555;
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
