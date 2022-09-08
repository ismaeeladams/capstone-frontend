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
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <!-- <tr> -->
        <adminRoomTable
          v-for="booking in room"
          :key="booking.room_id"
          :booking="booking"
        />
        <!-- </tr>  -->
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>Log in DUMBASS</h1>
  </div>
</template>
<script>
import adminRoomTable from "../components/adminRoomTable.vue";
export default {
  components: {
    adminRoomTable,
  },
  mounted() {
    this.declareUserType();
    this.$store.dispatch("getRooms");
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
    room() {
      // console.log(this.$store.state.rooms);
      return this.$store.state.rooms;
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
<style scoped>
.table {
  width: 100%;
}
</style>
