<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div id="header-container">
    <h1>MovieStore: The Home to Films of Grandeur </h1>
    <button class="loginButton" @click="router.push('/login')">LOGIN</button>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  color: antiquewhite;
}

#header-container {
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #001011;
}

.loginButton {
  height: 3em;
  width: 6em;
  border-radius: 5px;
  background-color: antiquewhite;
}

.loginButton:hover {
  background-color: #a3f0f6;
  transition: 0.4s;
}
</style>
