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
            <div class="modal-body">...</div>
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
};
</script>
<style scoped>
.modal-content > * {
  color: black;
}
</style>
