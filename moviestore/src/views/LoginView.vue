<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "../stores";
import { auth, firestore } from "../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

const store = useStore();
const router = useRouter();
const emailLogin = ref("");
const passwordLogin = ref("");
const wrongPassword = ref(false)

const loginEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      emailLogin.value,
      passwordLogin.value
    );
    store.user = user;
    router.push("/movies");
  } catch (error) {
    wrongPassword = !wrongPassword;
    alert(error);
    console.log(error);
  }
};
</script>

<template>
  <div id="login-page">
    <div class="login-container">
      <form class="userInfo" @submit.prevent="loginEmail()">
        <h1>Login</h1>
        <p>Sign In With Email</p>
        <input v-model="emailLogin" type="email" placeholder="Email" />
        <input
          v-model="passwordLogin"
          type="password"
          placeholder="Password"
        />
        <input type='submit' value="Login" />
        <h5 v-if="wrongPassword">Invalid Username Or Password!</h5>
      </form>
      <p>-----------------New to MovieStore?---------------</p>
      <br>
      <div class="button-menu">
        <button class="buttons" @click="router.push('/register')">Register</button>
        <button class="buttons" @click="router.push('/')">Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#login-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #05292c, #0a9595);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.login-container {
  height: 25em;
  width: 25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2.5em;
  border-radius: 20px;
  background-color: #cdf9fb;
  font-family: montserrat;
  border-color: #010303;
  border-style: double;
  border-width: 0.5em;
  box-shadow: 4px 4px rgb(0, 0, 0);
}

h1 {
  margin: 0 0 0.2em 0;
  font-size: 7ch;
}
.userInfo {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
}

input {
  height: 35px;
  width: 100%;
  padding: 0.3em;
  margin: 0.1em;
}

.userInfo > input[type=submit] {
  margin: 0.5em 0 2em 0;
  color: rgb(0, 0, 0);
  background-color: #f0f0f0;
  border-radius: 5px;
}

.userInfo > input[type=submit]:hover {
  color: antiquewhite;
  background-color: #1d4548;
  transition: 0.5s;
}

.button-menu {
  display: flex;
  max-height: 7ch;
  width: 100%;
}

.buttons {
  height: 30px;
  margin: 0.1em;
  width: 50%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-radius: 5px;
}

.buttons:hover {
  color: antiquewhite;
  background-color: #1d4548;
  transition: 0.5s;
}
</style>
