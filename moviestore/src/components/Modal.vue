<script setup>
import { useStore } from "../stores";
import axios from "axios";
import { ref } from "vue";

const store = useStore();
const props = defineProps(["id"]);
const inCart = ref(false);

const movieData = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: `e552c8258b3f71b20f3fc069ca964a73`,
      include_adult: false,
    },
  })
).data;

</script>

<template>
  <Teleport to="body">
    <div class="modal-page" @click.self="$emit('toggleModal')">
      <div class="modal-container">
        <button class="exit-button" @click="$emit('toggleModal')">X</button>
        <div class="movie" v-if="movieData">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`"
          />
          <div class="movie-info">
            <h1 id="title">{{ movieData.title }}</h1>
            <br />
            <h4>Average Score:{{ movieData.vote_average }}</h4>
            <h4>Runtime: {{ movieData.runtime }}</h4>
            <h4>Revenue: ${{ movieData.revenue }}</h4>
            <h4>Release Date: {{ movieData.release_date }}</h4>
            <h4>Genre: {{ movieData.genres[0].name }}</h4>
            <br />
            <p>Synopsis: {{ movieData.overview }}</p>
            <h4 v-if="!store.checkCart(movieData.poster_path, movieData.title)">This item is already in your cart!</h4>
            <button
              class="buy-button"
              v-else
              @click="store.addToCart(movieData.poster_path, movieData.title)"
            >
              Buy
            </button>
          </div>
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

.modal-container {
  border-radius: 0.5em;
  border-color: antiquewhite;
  border-style: double;
}

.movie {
  display: flex;
  padding: 0.2em;
}

#title {
  text-decoration: underline;
}

.movie-info {
  padding: 1em;
}

.modal-page .modal-container {
  background-color: #010909;
  width: clamp(280px, 100%, 900px);
  height: 50vh;
  position: relative;
  color: antiquewhite;
}

.exit-button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #b40000;
  font-weight: bold;
  border-radius: 5%;
}

h4 {
  color: antiquewhite;
}

.buy-button {
  position: absolute;
  bottom: 1em;
  padding: 1em 2em 1em 2em;
  border-radius: 5%;
  border-color: #010909;
  background-color: aquamarine;
}

.buy-button:hover {
  cursor: pointer;
  background-color: rgb(26, 138, 101);
  transition: 0.4s;
}

img {
  width: 230px;
}
</style>
