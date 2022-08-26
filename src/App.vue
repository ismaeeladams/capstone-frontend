<template>
  <Navbar />
  <div class="body">
    <router-view />
  </div>
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
.body {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/mg6pmJrt/plain2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  color: white;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
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
  color: #64a8eb;
}
nav .logs :hover {
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
