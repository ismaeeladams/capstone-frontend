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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <adminUser v-for="user in users" :key="user.user_id" :user="user" />
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>Log in DUMBASS</h1>
  </div>
</template>
<script>
import adminUser from "../components/adminUserTable.vue";
export default {
  components: {
    adminUser,
  },
  mounted() {
    this.declareUserType();
    this.$store.dispatch("getUsers");
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
    users() {
      // console.log(this.$store.state.rooms);
      return this.$store.state.user;
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
