<script setup>
  import { ref } from 'vue'

  const value = ref(0)

  function increment() {
    value.value++
  }
</script>

<template>
  <BButton @click="increment" variant="primary">
    {{ value }}
  </BButton>

  <div>
     <!-- Redan stylat som bootstrap component "BButton" vartiant ersätter class -->
    <BButton variant="primary">Primary</BButton>
    <BButton variant="secondary">Secondary</BButton>
    <BButton variant="success">Success</BButton>
    <BButton variant="danger">Danger</BButton>
    <BButton variant="warning">Warning</BButton>
    <BButton variant="info">Info</BButton>
    <BButton variant="light">Light</BButton>
    <BButton variant="dark">Dark</BButton>
  </div>

  <div>
    <!-- Man kan också använda outline- och lägga till vilken variant man vill -->
    <BButton size="lg" squared variant="outline-primary">Primary</BButton>
    <BButton size="lg" squared variant="outline-success">Success</BButton>
    <!-- lg = large man kan ändra till small etc -->
  </div>

  <BContainer>
    <!-- Skapa 3 containers som tar lika mycket plats -->
  <BRow>
    <BCol><BButton variant="dark">Dark</BButton></BCol>
    <!-- Lägg till en button eller annat i innehållet och ev ta bort classen -->
    <BCol class="bg-secondary">2</BCol>
    <BCol class="bg-success">3</BCol>
  </BRow>
</BContainer>

<BContainer>
  <BRow>
    <!-- kolumner med olika bredd -->
    <BCol class="bg-primary" cols="4">1</BCol>
    <BCol class="bg-secondary" cols="3">2</BCol>
    <BCol class="bg-success" cols="2">3</BCol>
    <BCol class="bg-danger">4</BCol>
  </BRow>
</BContainer>

<BContainer fluid="lg">
  <BRow>
    <!-- Responsiva kolumner för media queries -->
    <BCol class="bg-primary" cols="4" md="4">1</BCol>
    <BCol class="bg-secondary" cols="3" md="4">2</BCol>
    <BCol class="bg-success" cols="2" md="4">3</BCol>
    <BCol class="bg-danger" cols="3" md="12">4</BCol>
  </BRow>
</BContainer>
</template>
