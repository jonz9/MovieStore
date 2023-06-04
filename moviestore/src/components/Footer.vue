<script setup></script>

<template>
  <div id="footer-container">
    <p>Email: john.zhang4@student.tdsb.on.ca</p>
    <p>#: (416) 396-6675</p>
    <p>Address: 2020 Midland Ave</p>
    <p><a target="_blank" href="https://www.linkedin.com/in/john-zhang-2665b9236/">LinkedIn</a></p>
    <p><a target="_blank" href="myresume.pdf">Resume</a></p>
  </div>
</template>

<style scoped>
#footer-container {
  width: 100vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001011;
  color: antiquewhite;
  padding: 0 2em 0 2em;
}

a {
  color: antiquewhite;
  text-decoration: none;
}

a:hover {
  margin: 0.2em 0.1em 0.2em 0.1em;
  background-color: #289faa;
  border-radius: 10%;
}
</style>