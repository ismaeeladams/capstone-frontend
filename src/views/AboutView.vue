<template>
  <div class="about">
    <div v-if="user">
      <h1>This is an about page</h1>
      <div class="top">
        <h1>About us</h1>
        <div>
          <p>
            This hotel was the last and final wish of the founders
            grand-father.It was founderd in the late 1960's as a simple BnB that
            soon became what it is today. Now we bost a staggering number of 300
            staff and
          </p>
        </div>
      </div>
      <form action="https://formspree.io/f/xoqrkjbg" method="POST">
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
      </form>
    </div>
    <div v-else>
      <h1>Log in DUMBASS</h1>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped></style>
