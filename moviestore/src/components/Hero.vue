<script>
import heroPic from "@/misc/hero-pic.jpg";

export default {
  data() {
    return {
      heroPic,
    };
  },
};
</script>

<template>
  <div id="hero-container">
    <img class="heroImg" :src="heroPic" alt="hero_picture" />
  </div>
</template>

<style scoped>
#hero-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  background-color: #093a3e;
  justify-content: center;
  align-items: center;
}

.heroImg {
  height: 100%;
  width: 100%;
}
</style>
