<script setup>
import { useStore } from "../stores";
import axios from "axios";

const store = useStore();
const props = defineProps(["id"]);

const movieData = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: `e552c8258b3f71b20f3fc069ca964a73`,
      include_adult: false,
    }
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-page" @click.self="$emit('toggleModal')">
      <div class="modal-container">
        <button @click="$emit('toggleModal')">X</button>
        <div v-if="movieData">
          <img :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`" />
          <h1>{{ movieData.title }}</h1>
          <h2>{{ movieData.release_date }}</h2>
          <h3 @click="store.addToCart(movieData.poster_path, movieData.title)">Buy</h3>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-page {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}

.modal-page .modal-container {
  background-color: #3b444b;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
}

.modal-page .modal-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #3b444b;
  font-weight: bold;
}

img {
  width: 200px;
}
</style>