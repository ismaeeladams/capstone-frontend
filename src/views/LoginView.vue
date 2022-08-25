<template>
  <div>
    <div class="login">
      <h2 class="login-header">Log in</h2>
      <form class="login-container">
        <p>
          <input
            v-model="emal"
            type="email"
            placeholder="Email"
            id="email"
            required
          />
        </p>
        <p>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            id="password"
          />
        </p>
        <!-- <p><input type="submit" value="Log in" /></p> -->
        <p>
          <button type="submit" @click.prevent="login">Log in</button>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
body {
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(https://i.postimg.cc/mg6pmJrt/plain2.jpg);
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
/* .login {
  border: solid 1px;
} */

.login {
  width: 400px;
  margin: 16px auto;
  font-size: 16px;
}

/* Reset top and bottom margins from certain elements */
.login-header,
.login p {
  margin-top: 0;
  margin-bottom: 0;
}

.login-header {
  background: black;
  padding: 20px;
  font-size: 1.4em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.login-container {
  background: #ebebeb;
  padding: 12px;
  box-shadow: 5px 5px 8px black;
}

/* Every row inside .login-container is defined with p tags */
.login p {
  padding: 12px;
}

.login button {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login button[type="email"],
.login button[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login button[type="email"]:focus,
.login button[type="password"]:focus {
  border-color: #888;
}

/* the inputs */
.login input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  padding: 16px;
  outline: 0;
  font-family: inherit;
  font-size: 0.95em;
}

.login input[type="email"],
.login input[type="password"] {
  background: #fff;
  border-color: #bbb;
  color: #555;
}

/* Text fields' focus effect */
.login input[type="email"]:focus,
.login input[type="password"]:focus {
  border-color: #888;
}

.login button[type="submit"] {
  background: darkgrey;
  border-color: transparent;
  color: #fff;
  cursor: pointer;
}

.login button[type="submit"]:hover {
  background: black;
  color: white;
}

/* Buttons' focus effect */
.login button[type="submit"]:focus {
  border-color: #05a;
}
</style>
