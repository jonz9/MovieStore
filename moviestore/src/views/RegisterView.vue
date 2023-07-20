<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from '../stores';
import { auth, firestore } from "../firebase";
import { getDoc, doc } from "@firebase/firestore";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

const store = useStore();
const router = useRouter();
const emailRegister = ref("");
const passwordOneRegister = ref("");
const passwordTwo = ref("");

const registerEmail = async () => {
  if (passwordOneRegister.value !== passwordTwo.value) {
    alert("Passwords Do Not Match! Try Again!");
    return;
  }
  const { user } = await createUserWithEmailAndPassword(
    auth,
    emailRegister.value,
    passwordOneRegister.value
  );
  store.user = user;
  router.push("/movies");
};

const registerGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  router.push("/movies");
  const { cart } = (
    await getDoc(doc(firestore, "carts", user.emailRegister))
  ).data();
  store.cart = cart;
};
</script>

<template>
  <div class="register-page">
    <div class="register-container">
      <form class="userInfo" @submit.prevent="registerEmail()">
        <h1>Register</h1>
        <p>Register Via Email</p>
        <input v-model="emailRegister" type="email" placeholder="Enter Email" />
        <input
          v-model="passwordOneRegister"
          type="password"
          placeholder="Choose A Password"
        />
        <input
          v-model="passwordTwo"
          type="password"
          placeholder="Confirm Password"
        />
        <input class="login-buttons" type="submit" value="Register" />

        <p>Register Via Google</p>
      </form>
      <div class="button-menu">
        <button class="buttons" @click="registerGoogle()">Google</button>
        <button class="buttons" @click="router.push('/login')">Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #05292c, #0a9595);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.register-container {
  height: 40em;
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