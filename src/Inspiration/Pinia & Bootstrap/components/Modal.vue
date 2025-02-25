<script setup>
  import { ref } from 'vue'

  const showModal = ref(false)

  function onOk() {
    console.log('Ok')
  }
</script>

<template>
  <!-- Sätt variablen till false från början och använd ! på click funktionen för att toggla -->
   <BButton @click="showModal = !showModal" variant="primary">
     Visa dialogruta
   </BButton>
   <BModal @ok="onOk" v-model="showModal" title="En dialogruta">
    Wow!
  </BModal>
</template>
