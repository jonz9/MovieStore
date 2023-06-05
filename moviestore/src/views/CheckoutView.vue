<script setup>
import { useStore } from "../stores/index.js";

const store = useStore();
</script>

<template>
  <div>
    <div class="top">
      <h1>Movies</h1>
      <h3>In Checkout</h3>
    </div>
  </div>
  <div class="buy">
    <div v-for="movie in store.cart">
      <h1>{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
img {
  height: 20rem;
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
}
</style>