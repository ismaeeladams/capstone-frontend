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
          <th>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add a room
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      What room shall it be ?
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="add">
                      <input
                        v-model="image"
                        type="text"
                        required
                        placeholder="1st image"
                        id="image"
                      />
                      <input
                        v-model="image_2"
                        type="text"
                        required
                        placeholder="2nd image"
                        id="image_2"
                      />
                      <input
                        v-model="image_3"
                        type="text"
                        required
                        placeholder="3rd image"
                        id="image_3"
                      />
                      <input
                        v-model="name"
                        type="text"
                        required
                        placeholder="Name"
                        id="name"
                      />
                      <input
                        v-model="size"
                        type="number"
                        required
                        placeholder="Size"
                        id="size"
                      />
                      <input
                        v-model="bedrooms"
                        type="number"
                        required
                        placeholder="Bedrooms"
                        id="bedrooms"
                      />
                      <input
                        v-model="bathrooms"
                        type="number"
                        required
                        placeholder="Bathrooms"
                        id="bathrooms"
                      />
                      <input
                        v-model="price"
                        type="number"
                        required
                        placeholder="Price"
                        id="price"
                      />
                      <input
                        v-model="description"
                        type="text"
                        required
                        placeholder="Dsecription"
                        id="description"
                      />
                      <input
                        v-model="type"
                        type="text"
                        required
                        placeholder="Type of room"
                        id="type"
                      />
                      <button type="submit" class="btn btn-primary">
                        Save changes
                      </button>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </th>
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
  data() {
    return {
      image: "",
      image_2: "",
      image_3: "",
      name: "",
      size: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      description: "",
      type: "",
    };
  },
  mounted() {
    this.declareUserType();
    this.$store.dispatch("getRooms");
  },
  computed: {
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    user_type() {
      // console.log(this.$store.state.user_type);
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
    add() {
      this.$store.dispatch("createRooms", {
        image: this.image,
        image_2: this.image_2,
        image_3: this.image_3,
        name: this.name,
        size: this.size,
        bedrooms: this.bedrooms,
        bathrooms: this.bathrooms,
        price: this.price,
        description: this.description,
        type: this.type,
      });
    },
  },
};
</script>
<style scoped>
.table {
  width: 100%;
}
.modal-content {
  color: black;
}
</style>
