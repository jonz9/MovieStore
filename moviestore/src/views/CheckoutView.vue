<script setup>
import { useStore } from "../stores/index.js";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
</script>

<template>
  <div id="checkout-page">
    <div class="checkout-header">
      <h1>Movies</h1>
      <h4>In Checkout</h4>
      <button class="back-button" @click="router.push('/movies')">Back</button>
    </div>
    <div class="movie-checkout">
      <div class="cart-container" v-for="movie in store.cart">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
        <h2>{{ movie.title }}</h2>
        <button @click="store.removeFromCart(movie.title)">Remove</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 13em;
}

#checkout-page {
  background: linear-gradient(120deg, #05292c, #0a9595);
  min-height: 100vh;
  width: 100%;

  align-items: center;
  justify-content: center;
}

.checkout-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010c0d;
  color: antiquewhite;
  height: 15vh;
}

.movie-checkout {
  background: linear-gradient(120deg, #eef8f9, #ccffff);
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5em;
  padding: 3em;
}

.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.back-button {
  position: absolute;
  top: 2em;
  left: 3em;
  height: 3em;
  width: 5em;
  font-size: medium;
  background-color: #3d98a0;
  border-radius: 5%;
}
</style>
