<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <div class="navbar-nav">
            <!-- <router-link to="/">Home</router-link> -->
            <a><router-link to="/about">About</router-link></a>
            <a><router-link to="/register">Register</router-link></a>
            <a><router-link to="/login">Login</router-link></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
nav {
  padding: 1rem;
}
#nav {
  display: flex;
  justify-content: end;
}
.navbar-nav > * > * {
  padding: 0 0.5rem;
  text-decoration: none;
}
i {
  font-size: 1.25rem;
}
</style>
