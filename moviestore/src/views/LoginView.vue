<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const user = ref("");
const password = ref("");
const test = ref(true);

const login = () => {
  if (user === 'tmdb' && password === 'movies') {
    router.push("/movies");
  } 
  else {
    console.log("error");
  }
}
</script>

<template>
  <div id="login-page">
    <div class="login-container">
      <h1>LOGIN</h1>
      <form method="post">
        <div class="input-field">
          <input type="text" placeholder="tmdb" required v-model="user" />
          <label>Username</label>
        </div>
        <div class="input-field">
          <input type="text" placeholder="movies" required v-model="password" />
          <label>Password</label>
        </div>
        <div class="login-buttons">
          <input type="submit" value="Login" />
          <button @click="router.push('/')">Back</button>
        </div>
      </form>
    </div>    
  </div>
</template>

<style scoped>
#login-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #1d4548, #0a9595);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  height: 20em;
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: #cdf9fb;
  font-family: montserrat;

}

.input-field {
  display: flex;
  gap: 0.2em;
}
</style>