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
    <h2>Movies Page</h2>
    <button @click="router.push('/checkout')">Checkout</button>
    <div v-if="store.movies" class="movie-tile">
      <div v-for="movie in store.movies" class="movie-tile">
        <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" @click="toggleModal(movie.id)">
      </div>
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
#movies-page {
  background: linear-gradient(120deg, #05292c, #0a9595);
  height: 100vh;
  width: 100vw;
}
.movie-tile {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
img {
  width: 200px;
}
</style>