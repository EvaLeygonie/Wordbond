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
    <h1 class="title">Find your language buddy!</h1>
    <SearchBar @search="handleSearch" />
    <UserCards :search-string="searchString" />
</template>

<style>
.title {
    padding: 1em;
}
</style>
