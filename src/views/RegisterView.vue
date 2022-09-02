<template>
  <div>
    <div class="testbox">
      <div>
        <div id="registercard" class="card">
          <h1 id="register-head1">Registration</h1>
          <form @submit.prevent="register">
            <div class="out-input">
              <div class="input">
                <label id="icon" for="name">
                  <i class="fa-solid fa-envelope"></i
                ></label>
                <input
                  v-model="email"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="input">
                <label id="icon" for="name">
                  <i class="fa-solid fa-user"></i
                ></label>
                <input
                  v-model="full_name"
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="input">
                <label id="icon" for="name">
                  <i class="fa-solid fa-shield-halved"></i
                ></label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="input">
                <label id="icon" for="name">
                  <i class="fa-solid fa-phone"></i>
                </label>
                <input
                  v-model="phone"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="phone"
                  required
                />
              </div>
            </div>
            <div class="disclaim">
              <p>
                By clicking Register, you agree on our
                <a href="#">terms and condition</a>.
              </p>
              <button type="submit" class="button">Register</button>
            </div>
          </form>
          <div v-if="user">
            <p>you have been successfully register</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    const user_type = "user";
    return {
      full_name: "",
      email: "",
      password: "",
      billing_address: "",
      default_shipping_address: "",
      phone: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        phone: this.phone,
      });
    },
  },
};
</script>
<style scoped>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

.testbox {
  color: black;
}

body {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/jj2j60JC/plain4.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Seymour One", sans-serif;
}

#carticon {
  padding: 1rem;
  /* color: white; */
}
#register-head1 {
  color: black;
  /* font-family: "Seymour One", sans-serif; */
  text-shadow: 3px 3px 6px darkgrey;
  display: flex;
  justify-content: center;
  font-size: 2rem;
}
.testbox {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#registercard {
  background-color: grey;
  border-radius: 2px;
  box-shadow: 5px 5px 8px black;
}
/* .card {
  border: 1px solid;
  background-color: darkgrey;
} */
/* .out-input {
  display: flex;
  justify-content: center;
  align-items: center;
} */
.input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  /* border: solid 1px; */
  width: 100%;
}
input {
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  box-shadow: 3px 3px 6px black;
}
.input > * {
  padding-right: 1.2rem;
}
.disclaim {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

h3 {
  display: flex;
  justify-content: center;
}

a.navbar-brand {
  color: #e9ecef;
}
a.nav-link {
  color: white;
}
.navbar-nav .nav-link.active,
.navbar-nav .show > .nav-link {
  color: #e9ecef;
}

p {
  width: 50%;
}

button.button {
  font-size: 14px;
  font-weight: 600;
  /* color: white;
  padding: 6px 25px 0px 20px;
  margin: 10px 8px 20px 0px; */
  display: inline-block;
  /* float: right;
  text-decoration: none; */
  width: 5rem;
  height: 2rem;
  /* -webkit-border-radius: 5px;
  -moz-border-radius: 5px; */
  border-radius: 5px;
  background-color: white;

  box-shadow: 3px 3px 6px black;
  transition: all 0.1s linear 0s;
  /* top: 0px; */
  position: relative;
  border: none;
}

button.button:hover {
  /* top: 3px; */
  background-color: black;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: white;
}
</style>
