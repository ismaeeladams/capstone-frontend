<template>
  <!-- <div> -->
  <tr>
    <td>{{ booking.bedrooms }}</td>
    <td>{{ booking.name }}</td>
    <td>1</td>
    <td>12 500</td>
    <td>{{ booking.type }}</td>
    <td>{{ booking.description }}</td>
    <td>{{ booking.type }}</td>
    <td>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#edit_modal"
      >
        Edit
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="edit_modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="modal_container"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal_container">Modal title</h5>
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
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </td>
    <td><button>delete</button></td>
  </tr>
  <!-- </div> -->
</template>
<script>
export default {
  props: ["booking"],
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
  methods: {
    add() {
      this.$store.dispatch("editRooms", {
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
.modal-content > * {
  color: black;
}
</style>