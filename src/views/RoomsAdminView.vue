<template>
  <div v-if="user_type === 'admin'">
    <h1>the rooms table for admin</h1>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th>Bedroom</th>
          <th>Name</th>
          <th>Bathroom</th>
          <th>Price</th>
          <th>Image</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <tr>
          <td>2</td>
          <td>a room reservation</td>
          <td>1</td>
          <td>12 500</td>
          <td>the pic</td>
          <td>A long description</td>
          <td>lounge</td>
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
<style scoped></style>
