<script setup>
import { useStore } from "../stores/index.js";
import { useRouter } from "vue-router";
import axios from "axios";
import Modal from "../components/Modal.vue";
import { ref } from "vue";

const router = useRouter();
const genre = ref(8);
const search = ref("");
const movies = ref(null);
const page = ref(1);
const currentURL = ref("");
const totalPages = ref(0);
const showModal = ref(false);
const selectedRecordId = ref(0);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

const getTMDBData = async (url, options, page) => {
  movies.value = (
    await axios.get(url, {
      params: {
        api_key: `e552c8258b3f71b20f3fc069ca964a73`,
        region: "US",
        language: "en",
        include_adult: false,
        page,
        ...options,
      },
    })
  ).data;

  totalPages.value = movies.value.total_pages;
  currentURL.value = url;
};
</script>

<template>
  <div id="movies-page">
    <div class="movies-header">
      <div class="main-controls">
        <h1>Movies</h1>
        <input type="search" placeholder="Search Movies..." v-model="search" />
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/search/movie', {
              query: search,
            })"
        >
          Search
        </button>
        <select v-model="genres">
          <option value="28">Action</option>
          <option value="10751">Family</option>
          <option value="878">Science Fiction</option>
          <option value="37">Western</option>
          <option value="99">Documentary</option>
          <option value="9648">Mystery</option>
          <option value="18">Drama</option>
          <option value="10749">Romance</option>
        </select>
        <button
          @click="
            getTMDBData('https://api.themoviedb.org/3/discover/movie', {
              with_genres: genres,
            })"
        >
          Get Movies
        </button>
      </div>

      <div class="buttons">
        <button @click="router.push('/checkout')">Checkout</button>
        <button @click="router.push('/login')">Logout</button>
      </div>
    </div>
    <div v-if="movies" class="tiles-container">
      <div v-for="movie in movies.results" class="movie-tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          @click="toggleModal(movie.id)"
          :alt="`${movie.title}`"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
  <div class="page-footer"></div>
</template>

<style scoped>
#movies-page {
  background: linear-gradient(120deg, #05292c, #0a9595);
  justify-content: center;
  align-items: center;
}
.movies-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 8em 0.5em 8em;
  background-color: #011112;
  color: antiquewhite;
  margin-bottom: 20px;
}

.movies-header button {
  height: 2.5em;
  width: 6em;
  font-size: medium;
  background-color: #77dada;
  border-radius: 5%;
  margin: 0.1em;
}

.movies-header button:hover {
  background-color: #3f6464;
  transition: 0.6s;
}

.tiles-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
.movie-tile {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 200px;
}
</style>
