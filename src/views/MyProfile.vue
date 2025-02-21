<script>
export default {
  data() {
    return {
      interests: ["Cooking", "Travel"],
    };
  },
};
</script>

<template>
  <header class="ProfileHeader">
    <img
      alt="Profilbild"
      src="/public\bilder\avatar_2.png"
      class="ProfileFriend"
    />
  </header>
  <main class="MainContainer">
    <div class="ImageContainer">
      <img
        alt="Profilbild"
        src="/public\bilder\avatar_3.png"
        class="ProfileImage"
      />
    </div>

    <h3><span>LinguaLover</span></h3>
    <p class="ProfileText">
      I speak <span>English</span>. I want to learn <span>Spanish</span>
    </p>

    <p class="ProfileText">
      Hi! I would love to learn Spanish before my trip to Madrid this summer.
    </p>
    <p></p>
    <h1>Interests</h1>
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
.ProfileHeader {
  display: flex;
  align-items: end;
  justify-content: end;
  margin: 30px;
}

.ProfileFriend {
  width: 80px;
}

.ProfileImage {
  width: 180px;
  height: 180px;
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
