<script setup>
  import { ref } from 'vue'
  const text = ref('')
</script>

<template>
  <BContainer>
    <h1>Skriv ditt namn</h1>
    <BFormInput placeholder="Text" :state="text.length >= 3" v-model="text" />
      <!-- State är ett vilkor som behöver uppfyllas för att inmantningen ska godkännas -->
      <!-- Man kan göra mer avancerade states med refuljöra uttryck, exempelvis för email osv -->
    <p class="mt-3">Text: {{ text }}</p>
  </BContainer>
</template>
