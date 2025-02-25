<script setup>
const logoImage = new URL('../../public/logo/logo-orange.png', import.meta.url).href

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  if (email.value && password.value) {
    router.push("/findfriend");
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
          <a href="#" class="social-icon">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="social-icon">
            <i class="bi bi-google"></i>
          </a>
      </div>
      </div>
    </div>
    <div class="register-link">
        <p>Don't have an account?</p>
        <RouterLink to="/createprofile">Create an account!</RouterLink>
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

.input-box input:focus {
  outline: 2px solid #fa812f;
  }

.forgot-password {
  display: flex;
  justify-content: center;
}

.forgot-password a {
  font-size: 0.8em;
  text-decoration: none;
  color: black;
}

.forgot-password a:hover {
  text-decoration: underline;
  color: #fa812f;
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
  background-color: #fa812f;
}

.login-button button:hover {
  background-color: #fab12f;
  cursor: pointer;
}

.alt-login {
  text-align: center;
  margin-top: 10px;
}

.alt-login p {
  margin-bottom: 10px;
  font-size: 0.8em;
  color: black;
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

.social-icon {
  color: #fa812f;
  transform: scale(1.2);
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
  color: black;
}

.register-link a {
  font-size: 1em;
  text-decoration: none;
  color: black;
}

.register-link a:hover {
  text-decoration: underline;
  color: #fa812f;
}
</style>
