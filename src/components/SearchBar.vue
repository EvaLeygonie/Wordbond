<script setup>

</script>

<template>
    <div>
        <input type="text" placeholder="Search for language, interests...">
        <input type="button" value="Search">
    </div>
    <div>
        <input type="button" value="Learn English">
        <input type="button" value="Learn Spanish">
        <input type="button" value="Learn French">
        <input type="button" value="Learn German">
        <input type="button" value="Learn Mandarin">
    </div>
</template>

<style scoped>
    div {
        margin: auto;
        width: fit-content;
    }

    input {
        border: none;
        margin: 0.7em;
    }

    input[type="text"] {
        border-radius: 40px;
        padding: 1.2em 2em 1.2em;
        width: 400px;
    }

    input[type="button"] {
        border-radius: 20px;
        padding: 0.9em 1.1em 0.9em;
        color: #FFFFFF;
        background-color: #fa812f;
    }

    input[type="button"]:hover {
        background-color: #fab12f;
    }
</style>
