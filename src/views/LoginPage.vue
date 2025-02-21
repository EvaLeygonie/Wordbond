<script setup>
const logoImage = new URL('../../public/logo/logo-orange.png', import.meta.url).href
const faceBook = new URL('../../public/logo/facebook.png', import.meta.url).href
const instaGram = new URL('../../public/logo/instagram.png', import.meta.url).href
const google = new URL('../../public/logo/google.png', import.meta.url).href

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  if (email.value && password.value) {
    router.push("/");
  } else {
    alert("Please enter both Email and Password.");
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="logo-typ">
        <img :src="logoImage" alt="logo">
      </div>

      <div class="input-box">
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email..."
          />
      </div>

      <div class="input-box">
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Password..."
        />
      </div>

      <div class="forgot-password">
        <a href="#">Forgot Password...</a>
      </div>

      <div class="login-button">
        <button type="button" @click="login">Login</button>
      </div>

      <div class="alt-login">
        <p>Or login with</p>
        <div class="social-links">
        <a href="#"><img :src="faceBook" alt="Facebook" class="social-logo"></a>
        <a href="#"><img :src="instaGram" alt="Instagram" class="social-logo"></a>
        <a href="#"><img :src="google" alt="Google" class="social-logo"></a>
      </div>
      </div> 
    </div>
    <div class="register-link">
        <p>Do you have an account?</p>
        <a href="#">Create an account!</a>
      </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 20px;
  position: relative;
}

.login-box {
  padding: 30px;
  border-radius: 8px;
  max-width: 400px;
  position: relative;
}

.logo-typ {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.logo-typ img {
  width: 200px;
}

.input-box {
  margin-bottom: 8px;
}

.input-box input {
  width: 100%;
  padding: 10px;
  border: 1px;
  border-radius: 4px;
}

.forgot-password {
  display: flex;
  justify-content: center;
}

.forgot-password a {
  font-size: 0.8em;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-button {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 10px;
}

.login-button button {
  width: 100px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 1em;
}

.login-button button:hover {
  background-color: #fa812f;
  cursor: pointer;
}

.alt-login {
  text-align: center;
  margin-top: 10px;
}

.alt-login p {
  margin-bottom: 10px;
  font-size: 0.8em;
}

.social-links {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.social-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
  
}

.register-link {
  position: absolute;
  bottom: 10px;
  left: 10px;
  text-align: left;
  font-size: 0.8em;
}

.register-link p {
  margin-bottom: 5px;
}

.register-link a {
  font-size: 1em;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
