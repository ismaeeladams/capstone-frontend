<template>
  <div class="container">
    <div class="top">
      <div class="left">
        <h1>Personal Details</h1>
        <p>this is where you can view you accont</p>
      </div>
      <div class="right">
        <a
          type="button"
          class="btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src="https://picsum.photos/200/300?random=1" alt="no pic yet" />
        </a>
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
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input type="text" />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="details">
        <h3>Name</h3>
        <p>the name should be displayed here</p>
      </div>
      <hr />
      <div class="details">
        <h3>Contact</h3>
        <p>the name should be displayed here</p>
      </div>
      <hr />
      <div class="details">
        <h3>Email</h3>
        <p>the name should be displayed here</p>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container > * {
  color: white;
}
.top {
  display: flex;
  justify-content: space-between;
}
.details {
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
}
.details > h3 {
  font-weight: 700;
}
.details > p {
  /* font-weight: 300; */
  font-size: 1.5rem;
}
img {
  width: 5rem;
  height: 65% !important;
  border-radius: 50%;
  border: solid blue;
}
.right > * {
  color: black;
}
</style>
