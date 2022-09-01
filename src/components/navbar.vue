<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <div class="logs">
        <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navs"
        aria-controls="navs"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="user_type === 'user'">
        <div class="collapse navbar-collapse" id="navs">
          <div class="navbars-nav">
            <div class="logs">
              <router-link to="/about">About</router-link>
              <router-link to="/review">Reviews</router-link>
              <router-link to="/reservation">Reservations</router-link>
              <!-- <router-link to="/selectDate">Date Selection</router-link> -->
              <button @click="Logout()">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="user_type=== 'admin'">
        <div class="collapse navbar-collapse" id="navs">
          <div class="navbars-nav">
            <div class="logs">
              <!-- <router-link to="/about">About</router-link> -->
              <router-link to="/users">Users Table</router-link>
              <router-link to="/rooms">Rooms Table</router-link>
              <!-- <router-link to="/selectDate">Date Selection</router-link> -->
              <button @click="Logout()">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="user_type === null">
        <div class="collapse navbar-collapse" id="navs">
          <div class="navbars-nav">
            <div class="logs">
              <!-- <router-link to="/">Home</router-link> -->
              <router-link to="/register">Register</router-link>
              <router-link to="/users/login">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted(){
 this.declareUserType()
  },
  computed: {
    user() {
      return this.$store.state.user;
      console.log(this.$store.state.user);
      console.log(user?.user?.name);
    },
    user_type(){
       return this.$store.state.user_type;
    }
  },
  methods: {
    Logout() {
      this.$store.commit("Logout");
      this.$router.push("/");
    },
    declareUserType(){
      if(this.user){
        this.$store.state.user_type = this.user.user_type
      }
    }

  },
  
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
nav {
  padding: 1rem;
  background-color: transparent;
}
#nav {
  display: flex;
  /* justify-content: end; */
}
.navbars-nav > * > * {
  padding: 0 0.5rem;
  text-decoration: none;
}
i {
  font-size: 1.25rem;
}
/* #navs {
  display: flex;
  justify-content: end;
} */
</style>