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
      <div v-for="movie in store.cart">
        <h1>{{ movie.title }}</h1>
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 15em;
}

#checkout-page {
  background: linear-gradient(120deg, #eef8f9, #ccffff);
  justify-content: center;
  align-items: center;
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
  margin: 20px;  
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

/* img {
  height: 15em;
}

.buy {
  display: grid;
  position: relative;
  color: aliceblue;
  grid-template-columns: repeat(5, 1fr);
  background-image: linear-gradient(
    #76c9e7 0%,
    #39687e 35%,
    #214a44 100%
  );
}

.top {
  text-align: center;
  color: aliceblue;
  background-color: rgb(5, 75, 54);
} */
</style>