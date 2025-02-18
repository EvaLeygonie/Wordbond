<script>
import CitiesList from "./components/CitiesList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld from "./views/HelloWorld.vue";

export default {
  components: {
    CitiesList,
    HelloWorld,
    LoginPage,
  },
};
</script>

<template>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
</template>
