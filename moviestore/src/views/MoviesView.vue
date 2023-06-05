<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../stores/index.js";
import { ref } from "vue";
import Modal from "../components/Modal.vue";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const store = useStore();

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};
</script>

<template>
  <div id="movies-page">
    <div class="movies-header">
      <h1>Movies Page</h1>
      <button @click="router.push('/checkout')">Checkout</button>
    </div>
    <div v-if="store.movies" class="tiles-container">
      <div v-for="movie in store.movies" class="movie-tile">
        <img
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`"
          @click="toggleModal(movie.id)"
        />
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
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
  height: 2em;
  width: 5em;
  font-size: medium;
  background-color: #77dada;
  border-radius: 5%;
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
