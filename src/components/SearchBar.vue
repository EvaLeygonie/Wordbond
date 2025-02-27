<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])

const searchInput = ref('')

const blockOrNone = ref('none')

function clearInputField() {
    searchInput.value = ''
    sendData()
}

function setLanguage(language) {
    searchInput.value = language
    sendData()
    toggleX()
}

function toggleX() {
    if (searchInput.value !== '') {
        blockOrNone.value = 'block'
    } else {
        blockOrNone.value = 'none'
    }
}

const sendData = () => {
    emit('search', searchInput.value)
}
</script>

<template>
    <div class="input-group mb-3">
        <input id="search_input" v-model="searchInput" type="text" @keyup.enter="sendData" @keyup="toggleX" placeholder="Search for language..." />
        <i class="bi bi-x" @click="clearInputField(); toggleX()" :style="{ display: blockOrNone }"></i>
        <input
            type="button"
            value="Search"
            @click="
                () => {
                    sendData()
                    changeInputValue()
                }
            "
        />
    </div>
    <div>
        <input class="language" type="button" value="Learn English" @click="setLanguage('English')" />
        <input class="language" type="button" value="Learn Spanish" @click="setLanguage('Spanish')" />
        <input class="language" type="button" value="Learn French" @click="setLanguage('French')" />
        <input class="language" type="button" value="Learn German" @click="setLanguage('German')" />
        <input class="language" type="button" value="Learn Korean" @click="setLanguage('Korean')" />
        <input class="language" type="button" value="Learn Mandarin" @click="setLanguage('Mandarin')" />
    </div>
</template>

<style scoped>
div {
    margin: auto;
    width: fit-content;
    text-align: center;
}

input {
    font-size: 0.9em;
    border: none;
}

i {
    margin: 1em;
    position: absolute;
    right: 5em;
    transform: scale(1.9);
    cursor: pointer;
    color: #575555;
}

i:hover {
    color: #b0b0b0;
}

input[type='text'] {
    border-radius: 40px;
    padding: 1.2em 2em 1.2em;
    width: 50vw;
}

input[type='button'] {
    font-weight: bold;
    border-radius: 30px;
    padding: 0.9em 1.1em 0.9em;
    color: #ffffff;
    background-color: #fa812f;
}

.language {
    margin: 0.7em;
    display: none;
}

input[type='button']:hover {
    background-color: #fab12f;
}

@media screen and (min-width: 1000px) {
    .language {
        margin: 0.7em;
        display: inline;
    }
}
</style>
