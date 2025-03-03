<template>
  <RouterLink to="/findfriend">
    <div class="noMatch">
      <h3>You have no match!</h3>
      <h3>Go find a friend to chat with :)</h3>
    </div>
  </RouterLink>
</template>

<style scoped>
  .noMatch {
    margin-top: 50px;
  }

  h3 {
    margin: 20px;
    padding: 0;
  }
</style>
