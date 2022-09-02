<template>
  <div v-if="user_type === 'admin'">
    <h1>this is where the users table will be held</h1>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Email</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>User Type</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <tr>
          <td>someone@gmail.com</td>
          <td>Someone Yet No one</td>
          <td>012 354 8869</td>
          <td>user</td>
          <td>of something</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>Log in DUMBASS</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    this.declareUserType();
  },
  computed: {
    // user() {
    //   return this.$store.state.user;
    //   console.log(this.$store.state.user);
    //   console.log(user?.user?.name);
    // },
    user_type() {
      return this.$store.state.user_type;
    },
  },
  methods: {
    declareUserType() {
      if (this.user) {
        this.$store.state.user_type = this.user.user_type;
      }
    },
  },
};
</script>
<style></style>
