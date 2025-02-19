<script>
export default {
  data() {
    return {
      interests: ["Cooking", "Exercise", "Games", "Music", "Art", "Travel"],
    };
  },
};
</script>

<template>
  <div class="ImageContainer">
    <img
      alt="Profilbild"
      src="/public\bilder\11475221.jpg"
      class="ProfileImage"
    />
  </div>

  <p>Hi! I would love to learn Italian before my trip to Sicily this summer.</p>
  <p></p>
  <ul class="interest-container">
    <li class="InterestTag" v-for="interest in interests" :key="interest">
      {{ interest }}
    </li>
  </ul>
</template>
