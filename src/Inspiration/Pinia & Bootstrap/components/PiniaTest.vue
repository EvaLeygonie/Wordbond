<script setup>
  import { useCounterStore } from '../store.js'

  const store = useCounterStore()
  // value variablen och funktionen har flyttats till en central store så andra komponenter kan nå den
</script>

<template>
  <input @click="store.increment(2)" type="button" :value="store.value" />
  <input @click="store.incrementTemp" type="button" :value="store.valueTemp" />
</template>
