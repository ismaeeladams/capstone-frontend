<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a :hover {
  font-weight: bold;
  /* color: #ffffff; */
  animation-name: colorchange;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@keyframes colorchange {
  0% {
    color: red;
  }
  20% {
    color: blue;
  }
  40% {
    color: green;
  }
  60% {
    color: yellow;
  }
  80% {
    color: orange;
  }
  100% {
    color: hotpink;
  }
}
</style>
