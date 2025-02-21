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
  <header class="FriendAvatarImage">Friend avatar</header>
  <main class="MainContainer">
    <div class="ImageContainer">
      <img
        alt="Profilbild"
        src="/public\bilder\11475221.jpg"
        class="ProfileImage"
      />
    </div>
    <h1>Interests</h1>
    <p class="ProfileText">
      I speak <span>Swedish</span>. I want to learn <span>Italian</span>
    </p>
    <p class="ProfileText">
      Hi! I would love to learn Italian before my trip to Sicily this summer.
    </p>
    <p></p>
    <ul class="interest-container">
      <li class="InterestTag" v-for="interest in interests" :key="interest">
        {{ interest }}
      </li>
    </ul>
  </main>
</template>

<style>
span {
  text-decoration: underline;
}
.FriendAvatarImage {
  display: flex;
  align-items: end;
  justify-content: end;
  margin: 30px;
}

.ProfileImage {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;

  border-radius: 60%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.MainContainer {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
}

.ProfileText {
  margin: 10px;
}

.interest-container {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.InterestTag {
  margin: 5px;
  padding: 10px;
  background-color: #fa812f;
  color: #fef3e2;
  border-radius: 5px;
  font-weight: bold;
  display: inline-block;
}
</style>
