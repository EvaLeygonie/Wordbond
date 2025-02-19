<script setup>
  import SearchBar from '../components/SearchBar.vue'
  import UserCards from '../components/UserCards.vue'
</script>

<template>
  <h1 class="title">Find your language buddy!</h1>
  <SearchBar />
  <UserCards />

</template>

<style>
  .title {
    padding: 1em;
  }
</style>
