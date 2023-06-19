<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "../stores";
import { auth, firestore } from "../firebase";
import { getDoc, doc } from "@firebase/firestore";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const store = useStore();
const router = useRouter();
const emailRegister = ref("");
const emailLogin = ref("");
const passwordOneRegister = ref("");
const passwordOneLogin = ref("");
const passwordTwo = ref("");
const passwordCheck = ref(true);

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

const loginEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      emailLogin.value,
      passwordOneLogin.value
    );
    store.user = user;
    router.push("/movies");
  } catch (error) {
    passwordCheck = !passwordCheck;
    console.log(error);
    alert("you suck");
  }
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
  <div id="login-page">
    <div class="login-container">
      <form class="userInfo" @submit.prevent="registerEmail()">
        <h1>Register With Email</h1>
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
      </form>
      <form class="userInfo" @submit.prevent="loginEmail()">
        <h1>Login With Email</h1>
        <input v-model="emailLogin" type="email" placeholder="Email" />
        <input
          v-model="passwordOneLogin"
          type="password"
          placeholder="Password"
        />
        <input class="login-buttons" type="submit" value="Login" />
        <h5 v-if="!passwordCheck">Invalid Username Or Password!</h5>
      </form>
    </div>
    <div class="main-buttons">
      <button class="buttons" @click="registerGoogle()">Google</button>
      <button class="buttons" @click="router.push('/')">Back</button>
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
  border-radius: 8%;
  background-color: #cdf9fb;
  font-family: montserrat;
  border-color: #010303;
  border-style: double;
  border-width: 0.5em;
  box-shadow: 4px 4px rgb(0, 0, 0);
}

.userInfo {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.login-buttons {
  display: flex;
  padding: 0.2em;
  gap: 0.5em;
}

input {
  height: 25px;
  padding: 0.3em;
  margin: 0.1em;
}

.main-buttons {
  position: relative;
  bottom: 4em;
  left: 7em;
}

.buttons {
  height: 35px;
  width: 60px;
  margin: 0.1em;
  background-color: #1d4548;
  color: antiquewhite;
  border-radius: 10%;
}
</style>
